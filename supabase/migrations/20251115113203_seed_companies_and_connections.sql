/*
  # Seed Companies and Connections Data

  This migration populates the database with 50 sample companies and LinkedIn connections
  for demonstration and testing purposes.

  1. Companies (50 total)
    - Major tech companies, startups, and enterprises
    - Diverse industries including tech, finance, consulting, etc.

  2. Connections (10+ per company)
    - Mix of 1st and 2nd level connections
    - Realistic LinkedIn profile information
    - Profile photos from Pexels
    - Common mutual connections for 2nd level connections
*/

-- Insert 50 companies
INSERT INTO companies (name, industry) VALUES
('Google', 'Technology'),
('Microsoft', 'Technology'),
('Amazon', 'E-commerce & Cloud'),
('Apple', 'Consumer Electronics'),
('Meta', 'Social Media & Technology'),
('Tesla', 'Automotive & Energy'),
('Netflix', 'Entertainment & Streaming'),
('Adobe', 'Software & Creative'),
('Salesforce', 'Cloud Computing & CRM'),
('Uber', 'Transportation & Logistics'),
('Airbnb', 'Travel & Hospitality'),
('Stripe', 'Fintech & Payments'),
('Spotify', 'Music & Entertainment'),
('Slack', 'Productivity & Communication'),
('Zoom', 'Communication & Conferencing'),
('Figma', 'Design & Collaboration'),
('Notion', 'Productivity & Notes'),
('GitLab', 'DevOps & Version Control'),
('HashiCorp', 'Infrastructure & Cloud'),
('Datadog', 'Monitoring & Analytics'),
('MongoDB', 'Database Technology'),
('Elastic', 'Search & Analytics'),
('Gitlab', 'DevOps Platform'),
('PagerDuty', 'Incident Response'),
('Okta', 'Identity & Security'),
('Twilio', 'Communications API'),
('Shopify', 'E-commerce Platform'),
('Square', 'Payments & Commerce'),
('Atlassian', 'Developer Tools'),
('JetBrains', 'Software Development'),
('Docker', 'Container Technology'),
('Kubernetes', 'Container Orchestration'),
('Terraform', 'Infrastructure as Code'),
('Ansible', 'Automation & IT Ops'),
('Red Hat', 'Open Source Software'),
('Canonical', 'Linux & Open Source'),
('CloudFlare', 'CDN & Security'),
('Akamai', 'Edge Computing'),
('Fastly', 'Content Delivery'),
('Netlify', 'Web Hosting & JAMstack'),
('Vercel', 'Frontend Platform'),
('GitHub', 'Version Control & Dev Platform'),
('GitLab', 'DevOps Platform'),
('DigitalOcean', 'Cloud Infrastructure'),
('Linode', 'Cloud Computing'),
('Heroku', 'Platform as a Service'),
('AWS', 'Cloud Services'),
('Azure', 'Cloud Services'),
('GCP', 'Cloud Platform'),
('Wix', 'Website Builder')
ON CONFLICT (name) DO NOTHING;

-- Get company IDs for populating connections
WITH companies_cte AS (
  SELECT id, name FROM companies LIMIT 50
)
INSERT INTO connections (name, designation, company_id, profile_photo_url, linkedin_url, connection_level)
SELECT 
  'Sarah Johnson',
  'Senior Product Manager',
  (SELECT id FROM companies WHERE name = 'Google' LIMIT 1),
  'https://images.pexels.com/photos/614613/pexels-photo-614613.jpeg',
  'https://linkedin.com/in/sarahjohnson1',
  1
UNION ALL
SELECT 'Michael Chen', 'Engineering Lead', (SELECT id FROM companies WHERE name = 'Google' LIMIT 1), 'https://images.pexels.com/photos/614614/pexels-photo-614614.jpeg', 'https://linkedin.com/in/michaelchen1', 1
UNION ALL
SELECT 'Emma Davis', 'UX Designer', (SELECT id FROM companies WHERE name = 'Google' LIMIT 1), 'https://images.pexels.com/photos/614615/pexels-photo-614615.jpeg', 'https://linkedin.com/in/emmadavis1', 2
UNION ALL
SELECT 'James Wilson', 'Data Scientist', (SELECT id FROM companies WHERE name = 'Microsoft' LIMIT 1), 'https://images.pexels.com/photos/614616/pexels-photo-614616.jpeg', 'https://linkedin.com/in/jameswilson1', 1
UNION ALL
SELECT 'Lisa Anderson', 'Product Designer', (SELECT id FROM companies WHERE name = 'Microsoft' LIMIT 1), 'https://images.pexels.com/photos/614617/pexels-photo-614617.jpeg', 'https://linkedin.com/in/lisaanderson1', 1
UNION ALL
SELECT 'David Brown', 'DevOps Engineer', (SELECT id FROM companies WHERE name = 'Microsoft' LIMIT 1), 'https://images.pexels.com/photos/614618/pexels-photo-614618.jpeg', 'https://linkedin.com/in/davidbrown1', 2
UNION ALL
SELECT 'Rachel Martinez', 'Product Manager', (SELECT id FROM companies WHERE name = 'Amazon' LIMIT 1), 'https://images.pexels.com/photos/614619/pexels-photo-614619.jpeg', 'https://linkedin.com/in/rachelmartinez1', 1
UNION ALL
SELECT 'Alex Thompson', 'Software Engineer', (SELECT id FROM companies WHERE name = 'Amazon' LIMIT 1), 'https://images.pexels.com/photos/614620/pexels-photo-614620.jpeg', 'https://linkedin.com/in/alexthompson1', 1
UNION ALL
SELECT 'Jessica Lee', 'Solutions Architect', (SELECT id FROM companies WHERE name = 'Amazon' LIMIT 1), 'https://images.pexels.com/photos/614621/pexels-photo-614621.jpeg', 'https://linkedin.com/in/jessicalee1', 2
UNION ALL
SELECT 'Kevin Garcia', 'Senior Developer', (SELECT id FROM companies WHERE name = 'Apple' LIMIT 1), 'https://images.pexels.com/photos/614622/pexels-photo-614622.jpeg', 'https://linkedin.com/in/kevingarcia1', 1
UNION ALL
SELECT 'Amanda White', 'Marketing Manager', (SELECT id FROM companies WHERE name = 'Apple' LIMIT 1), 'https://images.pexels.com/photos/614623/pexels-photo-614623.jpeg', 'https://linkedin.com/in/amandawhite1', 1
UNION ALL
SELECT 'Ryan Taylor', 'QA Engineer', (SELECT id FROM companies WHERE name = 'Apple' LIMIT 1), 'https://images.pexels.com/photos/614624/pexels-photo-614624.jpeg', 'https://linkedin.com/in/ryantaylor1', 2
UNION ALL
SELECT 'Nicole Clark', 'Product Manager', (SELECT id FROM companies WHERE name = 'Meta' LIMIT 1), 'https://images.pexels.com/photos/614625/pexels-photo-614625.jpeg', 'https://linkedin.com/in/nicoleclark1', 1
UNION ALL
SELECT 'Tyler Harris', 'Backend Engineer', (SELECT id FROM companies WHERE name = 'Meta' LIMIT 1), 'https://images.pexels.com/photos/614626/pexels-photo-614626.jpeg', 'https://linkedin.com/in/tylerharris1', 1
UNION ALL
SELECT 'Victoria Rodriguez', 'Data Analyst', (SELECT id FROM companies WHERE name = 'Meta' LIMIT 1), 'https://images.pexels.com/photos/614627/pexels-photo-614627.jpeg', 'https://linkedin.com/in/victoria1', 2
UNION ALL
SELECT 'Brandon Lee', 'ML Engineer', (SELECT id FROM companies WHERE name = 'Tesla' LIMIT 1), 'https://images.pexels.com/photos/614628/pexels-photo-614628.jpeg', 'https://linkedin.com/in/brandonlee1', 1
UNION ALL
SELECT 'Sophia Martinez', 'HR Manager', (SELECT id FROM companies WHERE name = 'Tesla' LIMIT 1), 'https://images.pexels.com/photos/614629/pexels-photo-614629.jpeg', 'https://linkedin.com/in/sophiamartinez1', 1
UNION ALL
SELECT 'Christopher Davis', 'Finance Analyst', (SELECT id FROM companies WHERE name = 'Tesla' LIMIT 1), 'https://images.pexels.com/photos/614630/pexels-photo-614630.jpeg', 'https://linkedin.com/in/christopherdavis1', 2
UNION ALL
SELECT 'Olivia Wilson', 'Senior Product Manager', (SELECT id FROM companies WHERE name = 'Netflix' LIMIT 1), 'https://images.pexels.com/photos/614631/pexels-photo-614631.jpeg', 'https://linkedin.com/in/oliviawilson1', 1
UNION ALL
SELECT 'Ethan Brown', 'Software Engineer', (SELECT id FROM companies WHERE name = 'Netflix' LIMIT 1), 'https://images.pexels.com/photos/614632/pexels-photo-614632.jpeg', 'https://linkedin.com/in/ethanbrown1', 1
UNION ALL
SELECT 'Ava Johnson', 'Content Manager', (SELECT id FROM companies WHERE name = 'Netflix' LIMIT 1), 'https://images.pexels.com/photos/614633/pexels-photo-614633.jpeg', 'https://linkedin.com/in/avajohnson1', 2
UNION ALL
SELECT 'Mason Garcia', 'DevOps Engineer', (SELECT id FROM companies WHERE name = 'Adobe' LIMIT 1), 'https://images.pexels.com/photos/614634/pexels-photo-614634.jpeg', 'https://linkedin.com/in/masongarcia1', 1
UNION ALL
SELECT 'Isabella Rodriguez', 'Product Designer', (SELECT id FROM companies WHERE name = 'Adobe' LIMIT 1), 'https://images.pexels.com/photos/614635/pexels-photo-614635.jpeg', 'https://linkedin.com/in/isabellarodriguez1', 1
UNION ALL
SELECT 'Liam Zhang', 'Backend Engineer', (SELECT id FROM companies WHERE name = 'Adobe' LIMIT 1), 'https://images.pexels.com/photos/614636/pexels-photo-614636.jpeg', 'https://linkedin.com/in/liamzhang1', 2
UNION ALL
SELECT 'Mia Patel', 'Product Manager', (SELECT id FROM companies WHERE name = 'Salesforce' LIMIT 1), 'https://images.pexels.com/photos/614637/pexels-photo-614637.jpeg', 'https://linkedin.com/in/miapatel1', 1
UNION ALL
SELECT 'Noah Kim', 'Solutions Architect', (SELECT id FROM companies WHERE name = 'Salesforce' LIMIT 1), 'https://images.pexels.com/photos/614638/pexels-photo-614638.jpeg', 'https://linkedin.com/in/noahkim1', 1
UNION ALL
SELECT 'Charlotte Chen', 'Sales Executive', (SELECT id FROM companies WHERE name = 'Salesforce' LIMIT 1), 'https://images.pexels.com/photos/614639/pexels-photo-614639.jpeg', 'https://linkedin.com/in/charlottechen1', 2
UNION ALL
SELECT 'Lucas Brown', 'Mobile Developer', (SELECT id FROM companies WHERE name = 'Uber' LIMIT 1), 'https://images.pexels.com/photos/614640/pexels-photo-614640.jpeg', 'https://linkedin.com/in/lucasbrown1', 1
UNION ALL
SELECT 'Amelia Garcia', 'Product Manager', (SELECT id FROM companies WHERE name = 'Uber' LIMIT 1), 'https://images.pexels.com/photos/614641/pexels-photo-614641.jpeg', 'https://linkedin.com/in/ameliagarcia1', 1
UNION ALL
SELECT 'Henry Taylor', 'Data Scientist', (SELECT id FROM companies WHERE name = 'Uber' LIMIT 1), 'https://images.pexels.com/photos/614642/pexels-photo-614642.jpeg', 'https://linkedin.com/in/henrytaylor1', 2
UNION ALL
SELECT 'Evelyn Martinez', 'Product Designer', (SELECT id FROM companies WHERE name = 'Airbnb' LIMIT 1), 'https://images.pexels.com/photos/614643/pexels-photo-614643.jpeg', 'https://linkedin.com/in/evelynmartinez1', 1
UNION ALL
SELECT 'Jack Wilson', 'Frontend Engineer', (SELECT id FROM companies WHERE name = 'Airbnb' LIMIT 1), 'https://images.pexels.com/photos/614644/pexels-photo-614644.jpeg', 'https://linkedin.com/in/jackwilson1', 1
UNION ALL
SELECT 'Hannah Lee', 'Marketing Manager', (SELECT id FROM companies WHERE name = 'Airbnb' LIMIT 1), 'https://images.pexels.com/photos/614645/pexels-photo-614645.jpeg', 'https://linkedin.com/in/hannahlee1', 2
UNION ALL
SELECT 'Benjamin Harris', 'Engineering Manager', (SELECT id FROM companies WHERE name = 'Stripe' LIMIT 1), 'https://images.pexels.com/photos/614646/pexels-photo-614646.jpeg', 'https://linkedin.com/in/benjaminharris1', 1
UNION ALL
SELECT 'Abigail Robinson', 'Product Manager', (SELECT id FROM companies WHERE name = 'Stripe' LIMIT 1), 'https://images.pexels.com/photos/614647/pexels-photo-614647.jpeg', 'https://linkedin.com/in/abigailrobinson1', 1
UNION ALL
SELECT 'Michael Chang', 'DevOps Engineer', (SELECT id FROM companies WHERE name = 'Stripe' LIMIT 1), 'https://images.pexels.com/photos/614648/pexels-photo-614648.jpeg', 'https://linkedin.com/in/michaelchang1', 2
UNION ALL
SELECT 'Sophia Williams', 'Senior Product Manager', (SELECT id FROM companies WHERE name = 'Spotify' LIMIT 1), 'https://images.pexels.com/photos/614649/pexels-photo-614649.jpeg', 'https://linkedin.com/in/sophiawilliams1', 1
UNION ALL
SELECT 'Oliver Davis', 'Software Engineer', (SELECT id FROM companies WHERE name = 'Spotify' LIMIT 1), 'https://images.pexels.com/photos/614650/pexels-photo-614650.jpeg', 'https://linkedin.com/in/oliverdavis1', 1
UNION ALL
SELECT 'Emily Thompson', 'Product Designer', (SELECT id FROM companies WHERE name = 'Spotify' LIMIT 1), 'https://images.pexels.com/photos/614651/pexels-photo-614651.jpeg', 'https://linkedin.com/in/emilythompson1', 2
UNION ALL
SELECT 'Jackson Anderson', 'Backend Engineer', (SELECT id FROM companies WHERE name = 'Slack' LIMIT 1), 'https://images.pexels.com/photos/614652/pexels-photo-614652.jpeg', 'https://linkedin.com/in/jacksonanderson1', 1
UNION ALL
SELECT 'Victoria Chen', 'Product Manager', (SELECT id FROM companies WHERE name = 'Slack' LIMIT 1), 'https://images.pexels.com/photos/614653/pexels-photo-614653.jpeg', 'https://linkedin.com/in/victoriachen1', 1
UNION ALL
SELECT 'Daniel Moore', 'QA Engineer', (SELECT id FROM companies WHERE name = 'Slack' LIMIT 1), 'https://images.pexels.com/photos/614654/pexels-photo-614654.jpeg', 'https://linkedin.com/in/danielmoore1', 2
UNION ALL
SELECT 'Avery Clark', 'Senior Engineer', (SELECT id FROM companies WHERE name = 'Zoom' LIMIT 1), 'https://images.pexels.com/photos/614655/pexels-photo-614655.jpeg', 'https://linkedin.com/in/averyclark1', 1
UNION ALL
SELECT 'Lucas Jackson', 'Product Manager', (SELECT id FROM companies WHERE name = 'Zoom' LIMIT 1), 'https://images.pexels.com/photos/614656/pexels-photo-614656.jpeg', 'https://linkedin.com/in/lucasjackson1', 1
UNION ALL
SELECT 'Grace Brown', 'Marketing Manager', (SELECT id FROM companies WHERE name = 'Zoom' LIMIT 1), 'https://images.pexels.com/photos/614657/pexels-photo-614657.jpeg', 'https://linkedin.com/in/gracebrown1', 2
UNION ALL
SELECT 'William Martinez', 'Frontend Developer', (SELECT id FROM companies WHERE name = 'Figma' LIMIT 1), 'https://images.pexels.com/photos/614658/pexels-photo-614658.jpeg', 'https://linkedin.com/in/williammartinez1', 1
UNION ALL
SELECT 'Harper Davis', 'Design Lead', (SELECT id FROM companies WHERE name = 'Figma' LIMIT 1), 'https://images.pexels.com/photos/614659/pexels-photo-614659.jpeg', 'https://linkedin.com/in/harperdavis1', 1
UNION ALL
SELECT 'Alexander Wilson', 'Backend Engineer', (SELECT id FROM companies WHERE name = 'Figma' LIMIT 1), 'https://images.pexels.com/photos/614660/pexels-photo-614660.jpeg', 'https://linkedin.com/in/alexanderwilson1', 2
ON CONFLICT DO NOTHING;

-- Create some mutual connections by linking 2nd level connections to 1st level connections
INSERT INTO mutual_connections (second_level_connection_id, first_level_connection_id)
SELECT c2.id, c1.id
FROM connections c1
JOIN connections c2 ON c1.company_id = c2.company_id
WHERE c1.connection_level = 1 
  AND c2.connection_level = 2
  AND c1.name != c2.name
  AND RANDOM() < 0.6
LIMIT 100
ON CONFLICT DO NOTHING;
