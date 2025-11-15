import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Loader, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Company {
  id: string;
  name: string;
  industry: string;
}

export default function FindConnections() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCompanies();
  }, []);

  useEffect(() => {
    const filtered = companies.filter(company =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCompanies(filtered);
  }, [searchTerm, companies]);

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('companies')
        .select('*')
        .order('name');

      if (fetchError) throw fetchError;
      setCompanies(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load companies');
      console.error('Error fetching companies:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white pt-32 pb-20">
      <div className="max-w-content mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-4">
            Find Connections
          </h1>
          <p className="text-xl text-dark/70 max-w-2xl">
            Browse companies and discover your LinkedIn connections working there
          </p>
        </div>

        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark/40" size={20} />
            <input
              type="text"
              placeholder="Search companies or industries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-dark/10 focus:border-primary focus:outline-none transition-colors bg-white text-dark placeholder:text-dark/40"
            />
          </div>
        </div>

        {error && (
          <div className="mb-12 bg-red-50 border-2 border-red-200 rounded-xl p-6 flex items-center gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader className="animate-spin text-primary mx-auto mb-4" size={32} />
              <p className="text-dark/70 font-medium">Loading companies...</p>
            </div>
          </div>
        ) : filteredCompanies.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-background rounded-2xl p-8 inline-block">
              <p className="text-lg text-dark/70 font-medium">
                {companies.length === 0 ? 'No companies found yet.' : 'No companies match your search.'}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-primary font-semibold hover:text-blue-600 transition-colors"
                >
                  Clear search
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <Link
                key={company.id}
                to={`/company/${company.id}`}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 cursor-pointer group"
              >
                <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <p className="text-dark/60 font-medium">
                  {company.industry || 'Industry not specified'}
                </p>
                <div className="mt-6 pt-6 border-t border-dark/10">
                  <p className="text-sm text-primary font-semibold">View connections →</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
