/*
  # Create LinkedIn Connections Schema

  1. New Tables
    - `companies`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `industry` (text)
      - `logo_url` (text, optional)
      - `created_at` (timestamp)
    
    - `connections`
      - `id` (uuid, primary key)
      - `name` (text)
      - `designation` (text)
      - `company_id` (uuid, foreign key)
      - `profile_photo_url` (text)
      - `linkedin_url` (text)
      - `connection_level` (integer, 1 or 2)
      - `created_at` (timestamp)
    
    - `mutual_connections`
      - `id` (uuid, primary key)
      - `second_level_connection_id` (uuid, foreign key)
      - `first_level_connection_id` (uuid, foreign key)
      - `created_at` (timestamp)
    
    - `referral_requests`
      - `id` (uuid, primary key)
      - `connection_id` (uuid, foreign key)
      - `request_type` (text, 'referral' or 'connection_request')
      - `status` (text, 'pending', 'accepted', 'declined')
      - `message` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to companies and connections
    - Restrict referral_requests to allow tracking

  3. Indexes
    - Company name for searching
    - Connection company_id for filtering
    - Mutual connections for quick lookups
*/

-- Create companies table
CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  industry text,
  logo_url text,
  created_at timestamptz DEFAULT now()
);

-- Create connections table
CREATE TABLE IF NOT EXISTS connections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  designation text NOT NULL,
  company_id uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  profile_photo_url text NOT NULL,
  linkedin_url text,
  connection_level integer NOT NULL CHECK (connection_level IN (1, 2)),
  created_at timestamptz DEFAULT now()
);

-- Create mutual_connections table (links 2nd level connections to their 1st level mutual connections)
CREATE TABLE IF NOT EXISTS mutual_connections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  second_level_connection_id uuid NOT NULL REFERENCES connections(id) ON DELETE CASCADE,
  first_level_connection_id uuid NOT NULL REFERENCES connections(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(second_level_connection_id, first_level_connection_id)
);

-- Create referral_requests table
CREATE TABLE IF NOT EXISTS referral_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  connection_id uuid NOT NULL REFERENCES connections(id) ON DELETE CASCADE,
  request_type text NOT NULL CHECK (request_type IN ('referral', 'connection_request')),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined')),
  message text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(connection_id, request_type)
);

-- Enable RLS
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE mutual_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_requests ENABLE ROW LEVEL SECURITY;

-- Companies policies (public read)
CREATE POLICY "Anyone can read companies"
  ON companies FOR SELECT
  TO anon, authenticated
  USING (true);

-- Connections policies (public read)
CREATE POLICY "Anyone can read connections"
  ON connections FOR SELECT
  TO anon, authenticated
  USING (true);

-- Mutual connections policies (public read)
CREATE POLICY "Anyone can read mutual connections"
  ON mutual_connections FOR SELECT
  TO anon, authenticated
  USING (true);

-- Referral requests policies (allow anyone to insert)
CREATE POLICY "Anyone can create referral requests"
  ON referral_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read referral requests"
  ON referral_requests FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS companies_name_idx ON companies(name);
CREATE INDEX IF NOT EXISTS connections_company_id_idx ON connections(company_id);
CREATE INDEX IF NOT EXISTS connections_level_idx ON connections(connection_level);
CREATE INDEX IF NOT EXISTS mutual_connections_second_level_idx ON mutual_connections(second_level_connection_id);
CREATE INDEX IF NOT EXISTS referral_requests_connection_id_idx ON referral_requests(connection_id);
