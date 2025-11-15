import { useState } from 'react';
import { UserPlus, MessageSquare, Loader, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ConnectionCardProps {
  id: string;
  name: string;
  designation: string;
  profilePhoto: string;
  linkedinUrl?: string;
  connectionLevel: 1 | 2;
  mutualConnections?: Array<{ name: string; photo: string }>;
}

export default function ConnectionCard({
  id,
  name,
  designation,
  profilePhoto,
  linkedinUrl,
  connectionLevel,
  mutualConnections,
}: ConnectionCardProps) {
  const [actionLoading, setActionLoading] = useState(false);
  const [actionCompleted, setActionCompleted] = useState(false);

  const handleAction = async () => {
    try {
      setActionLoading(true);
      const requestType = connectionLevel === 1 ? 'referral' : 'connection_request';

      const { error } = await supabase
        .from('referral_requests')
        .insert({
          connection_id: id,
          request_type: requestType,
          status: 'pending',
        });

      if (error) {
        if (error.code === '23505') {
          setActionCompleted(true);
        } else {
          throw error;
        }
      } else {
        setActionCompleted(true);
      }
    } catch (err) {
      console.error('Error submitting request:', err);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-dark/10 hover:border-primary/30">
      <div className="flex gap-4">
        <img
          src={profilePhoto}
          alt={name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-dark truncate">{name}</h3>
          <p className="text-sm text-dark/60 truncate">{designation}</p>

          {connectionLevel === 2 && mutualConnections && mutualConnections.length > 0 && (
            <div className="mt-3 pt-3 border-t border-dark/10">
              <p className="text-xs text-dark/50 font-medium mb-2">Common connection:</p>
              <div className="flex items-center gap-2">
                <img
                  src={mutualConnections[0].photo}
                  alt={mutualConnections[0].name}
                  className="w-6 h-6 rounded-full object-cover"
                  title={mutualConnections[0].name}
                />
                {mutualConnections.length > 1 && (
                  <span className="text-xs text-dark/60">
                    +{mutualConnections.length - 1} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-dark/10">
        <button
          onClick={handleAction}
          disabled={actionLoading || actionCompleted}
          className={`w-full py-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm ${
            actionCompleted
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-primary text-white hover:bg-blue-600 disabled:bg-gray-300'
          }`}
        >
          {actionLoading ? (
            <>
              <Loader size={16} className="animate-spin" />
              Sending...
            </>
          ) : actionCompleted ? (
            <>
              <Check size={16} />
              {connectionLevel === 1 ? 'Referral requested' : 'Request sent'}
            </>
          ) : (
            <>
              {connectionLevel === 1 ? (
                <>
                  <MessageSquare size={16} />
                  Ask for Referral
                </>
              ) : (
                <>
                  <UserPlus size={16} />
                  Send Connection Request
                </>
              )}
            </>
          )}
        </button>
      </div>

      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-xs text-primary hover:text-blue-600 transition-colors text-center block font-medium"
        >
          View LinkedIn Profile
        </a>
      )}
    </div>
  );
}
