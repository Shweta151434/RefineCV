import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import ConnectionCard from '../components/ConnectionCard';

interface Connection {
  id: string;
  name: string;
  designation: string;
  profile_photo_url: string;
  linkedin_url?: string;
  connection_level: 1 | 2;
}

interface ConnectionWithMutuals extends Connection {
  mutualConnections?: Array<{ name: string; photo: string; id: string }>;
}

export default function CompanyConnections() {
  const { companyId } = useParams<{ companyId: string }>();
  const navigate = useNavigate();

  const [company, setCompany] = useState<{ id: string; name: string } | null>(null);
  const [firstLevelConnections, setFirstLevelConnections] = useState<ConnectionWithMutuals[]>([]);
  const [secondLevelConnections, setSecondLevelConnections] = useState<ConnectionWithMutuals[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (companyId) {
      fetchCompanyAndConnections(companyId);
    }
  }, [companyId]);

  const fetchCompanyAndConnections = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const { data: companyData, error: companyError } = await supabase
        .from('companies')
        .select('id, name')
        .eq('id', id)
        .maybeSingle();

      if (companyError) throw companyError;
      if (!companyData) {
        setError('Company not found');
        return;
      }

      setCompany(companyData);

      const { data: connectionsData, error: connectionsError } = await supabase
        .from('connections')
        .select('*')
        .eq('company_id', id)
        .order('connection_level', { ascending: true })
        .order('name', { ascending: true });

      if (connectionsError) throw connectionsError;

      const connections = connectionsData || [];

      const firstLevel = connections.filter((c) => c.connection_level === 1);
      const secondLevel = connections.filter((c) => c.connection_level === 2);

      const secondLevelWithMutuals = await Promise.all(
        secondLevel.map(async (connection) => {
          const { data: mutuals, error: mutualsError } = await supabase
            .from('mutual_connections')
            .select('first_level_connection_id')
            .eq('second_level_connection_id', connection.id);

          if (mutualsError) {
            console.error('Error fetching mutuals:', mutualsError);
            return { ...connection, mutualConnections: [] };
          }

          const mutualIds = mutuals?.map((m) => m.first_level_connection_id) || [];
          const mutualConnections = firstLevel
            .filter((c) => mutualIds.includes(c.id))
            .map((c) => ({
              name: c.name,
              photo: c.profile_photo_url,
              id: c.id,
            }))
            .slice(0, 2);

          return {
            ...connection,
            mutualConnections: mutualConnections.length > 0 ? mutualConnections : undefined,
          };
        })
      );

      setFirstLevelConnections(firstLevel);
      setSecondLevelConnections(secondLevelWithMutuals);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load connections');
      console.error('Error fetching company data:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white pt-32 pb-20">
      <div className="max-w-content mx-auto px-6">
        <button
          onClick={() => navigate('/find-connections')}
          className="flex items-center gap-2 text-primary hover:text-blue-600 transition-colors font-semibold mb-8"
        >
          <ArrowLeft size={20} />
          Back to Companies
        </button>

        {error ? (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 flex items-center gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
            <p className="text-red-800">{error}</p>
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader className="animate-spin text-primary mx-auto mb-4" size={32} />
              <p className="text-dark/70 font-medium">Loading connections...</p>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-dark mb-2">
                {company?.name}
              </h1>
              <p className="text-xl text-dark/70">
                {firstLevelConnections.length + secondLevelConnections.length} connections found
              </p>
            </div>

            {firstLevelConnections.length === 0 && secondLevelConnections.length === 0 ? (
              <div className="text-center py-20">
                <div className="bg-background rounded-2xl p-12 inline-block">
                  <p className="text-lg text-dark/70 font-medium">
                    No connections found at this company yet.
                  </p>
                </div>
              </div>
            ) : (
              <>
                {firstLevelConnections.length > 0 && (
                  <div className="mb-16">
                    <h2 className="text-3xl font-bold text-dark mb-6 flex items-center gap-2">
                      <span className="text-primary">1st Level</span> Connections
                      <span className="text-xl font-normal text-dark/50">
                        ({firstLevelConnections.length})
                      </span>
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {firstLevelConnections.map((connection) => (
                        <ConnectionCard
                          key={connection.id}
                          id={connection.id}
                          name={connection.name}
                          designation={connection.designation}
                          profilePhoto={connection.profile_photo_url}
                          linkedinUrl={connection.linkedin_url}
                          connectionLevel={1}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {secondLevelConnections.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-bold text-dark mb-6 flex items-center gap-2">
                      <span className="text-primary">2nd Level</span> Connections
                      <span className="text-xl font-normal text-dark/50">
                        ({secondLevelConnections.length})
                      </span>
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {secondLevelConnections.map((connection) => (
                        <ConnectionCard
                          key={connection.id}
                          id={connection.id}
                          name={connection.name}
                          designation={connection.designation}
                          profilePhoto={connection.profile_photo_url}
                          linkedinUrl={connection.linkedin_url}
                          connectionLevel={2}
                          mutualConnections={connection.mutualConnections}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
