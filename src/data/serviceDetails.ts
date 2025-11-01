import { LucideIcon, Wind, Heart, Activity, Stethoscope, Thermometer, TestTube, Microscope, Moon, Syringe, Shield } from 'lucide-react';

export interface ServiceDetail {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  causes: string[];
  symptoms: string[];
  procedures: {
    title: string;
    steps: string[];
  };
  devices: string[];
  treatment: {
    title: string;
    options: string[];
  };
  prevention: string[];
  image: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'asthma-management': {
    id: 'asthma-management',
    icon: Wind,
    title: 'Asthma Management',
    subtitle: 'Comprehensive Asthma Care for Better Breathing',
    description: 'Asthma is a chronic respiratory condition that causes inflammation and narrowing of the airways, leading to breathing difficulties. Our comprehensive asthma management program combines advanced diagnostics, personalized treatment plans, and ongoing monitoring to help you achieve optimal asthma control and improve your quality of life.',
    causes: [
      'Genetic predisposition and family history of asthma',
      'Environmental allergens (pollen, dust mites, pet dander)',
      'Air pollution and irritants (smoke, strong odors, chemicals)',
      'Respiratory infections during childhood',
      'Occupational exposures to chemicals or dust',
      'Cold air and weather changes',
      'Physical exercise (exercise-induced asthma)',
      'Stress and strong emotions'
    ],
    symptoms: [
      'Shortness of breath and difficulty breathing',
      'Wheezing sound during breathing',
      'Chest tightness or pain',
      'Chronic cough, especially at night',
      'Difficulty sleeping due to breathing problems',
      'Fatigue and reduced exercise tolerance',
      'Increased mucus production',
      'Rapid breathing and increased heart rate during attacks'
    ],
    procedures: {
      title: 'Diagnostic & Treatment Procedures',
      steps: [
        'Detailed medical history and physical examination',
        'Spirometry to measure lung function and airflow',
        'Peak flow monitoring for daily asthma tracking',
        'Bronchodilator response testing',
        'Allergy testing to identify triggers',
        'Exhaled nitric oxide (FeNO) testing for airway inflammation',
        'Chest X-ray if needed to rule out complications',
        'Development of personalized asthma action plan'
      ]
    },
    devices: [
      'Metered-dose inhalers (MDIs) with spacers',
      'Dry powder inhalers (DPIs)',
      'Nebulizers for medication delivery',
      'Peak flow meters for home monitoring',
      'Spirometer for lung function assessment',
      'Pulse oximeter for oxygen saturation monitoring'
    ],
    treatment: {
      title: 'Treatment Approaches',
      options: [
        'Quick-relief medications (rescue inhalers) for immediate symptom relief',
        'Long-term control medications (inhaled corticosteroids)',
        'Combination inhalers for comprehensive control',
        'Leukotriene modifiers for inflammation reduction',
        'Biologic therapies for severe asthma',
        'Proper inhaler technique training and education',
        'Asthma action plan development and review',
        'Trigger identification and avoidance strategies',
        'Regular follow-up and medication adjustment',
        'Pulmonary rehabilitation when needed'
      ]
    },
    prevention: [
      'Identify and avoid known asthma triggers',
      'Take medications as prescribed, even when feeling well',
      'Monitor lung function regularly with peak flow meter',
      'Get vaccinated against flu and pneumonia',
      'Maintain a clean, allergen-free home environment',
      'Exercise regularly with proper warm-up',
      'Manage stress through relaxation techniques',
      'Follow your personalized asthma action plan'
    ],
    image: '/src/assets/clinic-interior.jpg'
  },
  'allergy-testing': {
    id: 'allergy-testing',
    icon: Heart,
    title: 'Allergy Testing & Treatment',
    subtitle: 'Identify & Manage Your Allergies Effectively',
    description: 'Allergies occur when your immune system reacts to substances that are usually harmless. Our comprehensive allergy testing and treatment services help identify your specific triggers and provide effective management strategies through advanced testing methods and personalized immunotherapy.',
    causes: [
      'Genetic predisposition and family history',
      'Environmental allergens (pollen, mold, dust)',
      'Animal dander and pet allergens',
      'Insect stings and bites',
      'Food allergens (nuts, dairy, shellfish)',
      'Medications and drug reactions',
      'Latex and chemical sensitivities',
      'Early childhood exposure patterns'
    ],
    symptoms: [
      'Sneezing and runny or stuffy nose',
      'Itchy, watery eyes',
      'Skin rashes, hives, or eczema',
      'Throat irritation and coughing',
      'Difficulty breathing or wheezing',
      'Facial swelling or angioedema',
      'Digestive issues with food allergies',
      'Anaphylaxis in severe cases'
    ],
    procedures: {
      title: 'Allergy Testing Methods',
      steps: [
        'Comprehensive allergy history assessment',
        'Skin prick testing for immediate reactions',
        'Intradermal testing for detailed evaluation',
        'Blood tests (specific IgE testing)',
        'Patch testing for contact allergies',
        'Food challenge tests when indicated',
        'Pulmonary function testing with allergen exposure',
        'Development of allergen avoidance strategies'
      ]
    },
    devices: [
      'Skin prick test applicators and lancets',
      'Allergen extract panels (environmental, food)',
      'Patch test kits for contact allergies',
      'EpiPen auto-injectors for emergency treatment',
      'Antihistamine medications',
      'Nasal corticosteroid sprays'
    ],
    treatment: {
      title: 'Treatment Options',
      options: [
        'Allergen immunotherapy (allergy shots)',
        'Sublingual immunotherapy (under-tongue tablets)',
        'Antihistamines for symptom relief',
        'Nasal corticosteroids for congestion',
        'Leukotriene inhibitors',
        'Biologic medications for severe allergies',
        'Emergency epinephrine for anaphylaxis risk',
        'Environmental control and allergen avoidance',
        'Dietary modifications for food allergies',
        'Regular monitoring and treatment adjustment'
      ]
    },
    prevention: [
      'Avoid identified allergens when possible',
      'Use air purifiers with HEPA filters',
      'Keep windows closed during high pollen seasons',
      'Wash bedding weekly in hot water',
      'Use allergen-proof mattress and pillow covers',
      'Remove carpets and minimize fabric furnishings',
      'Carry emergency medications (EpiPen) if prescribed',
      'Read food labels carefully for food allergies'
    ],
    image: '/src/assets/clinic-doctor-desk.jpg'
  },
  'copd-care': {
    id: 'copd-care',
    icon: Activity,
    title: 'COPD Care',
    subtitle: 'Expert Management of Chronic Obstructive Pulmonary Disease',
    description: 'COPD is a progressive lung disease that makes breathing difficult due to damaged airways and lung tissue. Our comprehensive COPD care program focuses on slowing disease progression, managing symptoms, and improving quality of life through advanced therapies and personalized treatment plans.',
    causes: [
      'Long-term cigarette smoking (primary cause)',
      'Exposure to secondhand smoke',
      'Occupational dust and chemical exposure',
      'Indoor air pollution from cooking/heating',
      'Outdoor air pollution',
      'Alpha-1 antitrypsin deficiency (genetic)',
      'Childhood respiratory infections',
      'Asthma that progresses to fixed airway obstruction'
    ],
    symptoms: [
      'Chronic cough with mucus production',
      'Shortness of breath, especially during activities',
      'Wheezing and chest tightness',
      'Frequent respiratory infections',
      'Fatigue and lack of energy',
      'Unintended weight loss in advanced stages',
      'Swelling in ankles, feet, or legs',
      'Bluish tint to lips or fingernails (cyanosis)'
    ],
    procedures: {
      title: 'Diagnostic & Management Procedures',
      steps: [
        'Complete medical history and physical examination',
        'Spirometry to confirm airflow obstruction',
        'Lung volume and diffusion capacity testing',
        'Chest X-ray and CT scan for structural assessment',
        'Arterial blood gas analysis',
        'Six-minute walk test for functional assessment',
        'Pulse oximetry for oxygen level monitoring',
        'Assessment for oxygen therapy needs',
        'Evaluation for pulmonary rehabilitation'
      ]
    },
    devices: [
      'Bronchodilator inhalers (short and long-acting)',
      'Nebulizers for medication delivery',
      'Oxygen concentrators for home oxygen therapy',
      'Portable oxygen devices for mobility',
      'Pulse oximeters for monitoring',
      'Positive pressure devices (BiPAP) for severe cases',
      'Flutter valves for mucus clearance'
    ],
    treatment: {
      title: 'Comprehensive Treatment Plan',
      options: [
        'Smoking cessation (most important intervention)',
        'Bronchodilators (short and long-acting)',
        'Inhaled corticosteroids for inflammation',
        'Combination inhalers for optimal control',
        'PDE4 inhibitors for severe COPD',
        'Oxygen therapy when indicated',
        'Pulmonary rehabilitation program',
        'Breathing techniques and exercises',
        'Nutritional counseling and support',
        'Vaccinations (flu, pneumonia, COVID-19)',
        'Management of exacerbations',
        'Surgical options for select patients (lung volume reduction)'
      ]
    },
    prevention: [
      'Quit smoking immediately - most crucial step',
      'Avoid secondhand smoke and air pollutants',
      'Use protective equipment in occupational exposures',
      'Stay current with vaccinations',
      'Exercise regularly to maintain lung function',
      'Practice breathing exercises daily',
      'Avoid respiratory irritants and infections',
      'Follow medication regimen consistently',
      'Attend pulmonary rehabilitation sessions',
      'Monitor symptoms and seek early treatment for exacerbations'
    ],
    image: '/src/assets/clinic-patient-consultation.jpg'
  },
  'sleep-disorders': {
    id: 'sleep-disorders',
    icon: Stethoscope,
    title: 'Sleep Disorders',
    subtitle: 'Comprehensive Sleep Apnea & Sleep Disorder Treatment',
    description: 'Sleep disorders, particularly sleep apnea, can significantly impact your health and quality of life. Our specialized sleep disorder program offers comprehensive evaluation and treatment for sleep-related breathing problems using advanced diagnostic tools and evidence-based therapies.',
    causes: [
      'Excess weight and obesity',
      'Anatomical factors (large tonsils, thick neck)',
      'Nasal congestion and obstruction',
      'Age-related muscle relaxation',
      'Family history and genetics',
      'Alcohol and sedative use',
      'Smoking',
      'Sleeping position (back sleeping)'
    ],
    symptoms: [
      'Loud snoring',
      'Observed breathing pauses during sleep',
      'Gasping or choking during sleep',
      'Excessive daytime sleepiness',
      'Morning headaches',
      'Difficulty concentrating',
      'Mood changes and irritability',
      'High blood pressure',
      'Night sweats',
      'Decreased libido'
    ],
    procedures: {
      title: 'Sleep Disorder Evaluation',
      steps: [
        'Detailed sleep history questionnaire',
        'Physical examination of upper airway',
        'Home sleep apnea testing (HSAT)',
        'In-lab polysomnography when indicated',
        'Epworth Sleepiness Scale assessment',
        'Oxygen saturation monitoring',
        'Multiple sleep latency test for narcolepsy',
        'CPAP titration study for treatment optimization'
      ]
    },
    devices: [
      'Home sleep apnea testing devices',
      'CPAP (Continuous Positive Airway Pressure) machines',
      'Auto-CPAP with automatic pressure adjustment',
      'BiPAP for complex cases',
      'Oral appliances for mild sleep apnea',
      'Positional therapy devices',
      'Pulse oximeters for home monitoring'
    ],
    treatment: {
      title: 'Treatment Solutions',
      options: [
        'CPAP therapy (gold standard treatment)',
        'Auto-CPAP for variable pressure needs',
        'BiPAP for complex sleep apnea',
        'Oral appliance therapy for mild to moderate cases',
        'Positional therapy for position-dependent apnea',
        'Weight loss programs and lifestyle modifications',
        'Surgical options (UPPP, tongue advancement)',
        'Nasal treatments for obstruction',
        'Treatment of underlying medical conditions',
        'Regular follow-up and compliance monitoring'
      ]
    },
    prevention: [
      'Maintain a healthy weight',
      'Exercise regularly',
      'Avoid alcohol before bedtime',
      'Quit smoking',
      'Sleep on your side instead of back',
      'Keep nasal passages open',
      'Maintain regular sleep schedule',
      'Use CPAP machine consistently as prescribed'
    ],
    image: '/src/assets/doctor-portrait.jpg'
  },
  'pulmonary-function': {
    id: 'pulmonary-function',
    icon: TestTube,
    title: 'Pulmonary Function Tests',
    subtitle: 'Advanced Diagnostic Testing for Accurate Assessment',
    description: 'Pulmonary function tests (PFTs) are essential diagnostic tools that measure how well your lungs work. These comprehensive tests help diagnose respiratory conditions, monitor disease progression, and evaluate treatment effectiveness using state-of-the-art equipment.',
    causes: [
      'Diagnostic evaluation for respiratory symptoms',
      'Pre-operative assessment before surgery',
      'Monitoring chronic lung diseases',
      'Occupational health screening',
      'Disability evaluation',
      'Research and clinical trials',
      'Assessment of treatment response',
      'Evaluation of unexplained dyspnea'
    ],
    symptoms: [
      'Shortness of breath',
      'Chronic cough',
      'Wheezing',
      'Chest tightness',
      'Decreased exercise tolerance',
      'Frequent respiratory infections',
      'Fatigue with minimal exertion',
      'Abnormal breathing patterns'
    ],
    procedures: {
      title: 'Types of Pulmonary Function Tests',
      steps: [
        'Spirometry - measures airflow and lung volumes',
        'Lung volume testing - assesses total lung capacity',
        'Diffusion capacity (DLCO) - evaluates gas exchange',
        'Bronchodilator response testing',
        'Methacholine challenge test for asthma',
        'Exercise testing with oxygen monitoring',
        'Maximum voluntary ventilation (MVV)',
        'Body plethysmography for precise measurements',
        'Six-minute walk test for functional assessment'
      ]
    },
    devices: [
      'Spirometer - primary lung function testing device',
      'Body plethysmograph for lung volume measurement',
      'Diffusion testing equipment (DLCO)',
      'Peak flow meters',
      'Pulse oximeters',
      'Metabolic carts for exercise testing',
      'Bronchial challenge testing equipment',
      'Computerized interpretation systems'
    ],
    treatment: {
      title: 'Clinical Applications',
      options: [
        'Diagnosis of obstructive lung diseases (asthma, COPD)',
        'Diagnosis of restrictive lung diseases',
        'Differentiation between cardiac and pulmonary causes',
        'Pre-operative risk assessment',
        'Disability and impairment evaluation',
        'Monitoring disease progression',
        'Assessing treatment effectiveness',
        'Evaluation for lung transplant',
        'Occupational exposure assessment',
        'Research and epidemiological studies'
      ]
    },
    prevention: [
      'Regular testing for high-risk occupations',
      'Early detection of lung disease',
      'Baseline measurements before starting treatments',
      'Annual testing for chronic conditions',
      'Pre-employment screening for dust exposure',
      'Monitor smoking cessation progress',
      'Track asthma control over time',
      'Assess need for oxygen therapy'
    ],
    image: '/src/assets/clinic-interior.jpg'
  },
  'bronchitis-treatment': {
    id: 'bronchitis-treatment',
    icon: Thermometer,
    title: 'Bronchitis Treatment',
    subtitle: 'Effective Management of Acute & Chronic Bronchitis',
    description: 'Bronchitis is inflammation of the bronchial tubes that carry air to your lungs. Our comprehensive treatment approach addresses both acute and chronic bronchitis with personalized medication plans and respiratory therapy to help you recover quickly and prevent complications.',
    causes: [
      'Viral infections (most common cause)',
      'Bacterial infections (less common)',
      'Smoking and tobacco exposure',
      'Air pollution and irritants',
      'Occupational exposure to dust',
      'Chemical fumes and vapors',
      'Weakened immune system',
      'Gastroesophageal reflux disease (GERD)'
    ],
    symptoms: [
      'Persistent cough (dry or productive)',
      'Mucus production (clear, white, yellow, or green)',
      'Chest discomfort and tightness',
      'Shortness of breath',
      'Low-grade fever',
      'Fatigue and body aches',
      'Wheezing',
      'Sore throat'
    ],
    procedures: {
      title: 'Diagnostic & Treatment Procedures',
      steps: [
        'Detailed medical history and examination',
        'Chest auscultation (listening to lungs)',
        'Chest X-ray to rule out pneumonia',
        'Sputum culture for bacterial identification',
        'Pulmonary function tests if chronic',
        'Pulse oximetry for oxygen levels',
        'Blood tests if infection suspected',
        'Assessment for complications'
      ]
    },
    devices: [
      'Nebulizers for bronchodilator delivery',
      'Inhalers for symptom relief',
      'Humidifiers for moisture therapy',
      'Pulse oximeters for monitoring',
      'Peak flow meters',
      'Chest physiotherapy equipment'
    ],
    treatment: {
      title: 'Treatment Approaches',
      options: [
        'Rest and adequate fluid intake',
        'Bronchodilators for airway opening',
        'Cough suppressants or expectorants',
        'Anti-inflammatory medications',
        'Antibiotics only if bacterial infection confirmed',
        'Inhaled corticosteroids for chronic cases',
        'Pulmonary rehabilitation',
        'Oxygen therapy if needed',
        'Smoking cessation counseling',
        'Management of underlying conditions'
      ]
    },
    prevention: [
      'Quit smoking and avoid secondhand smoke',
      'Get annual flu vaccination',
      'Practice good hand hygiene',
      'Avoid close contact with sick individuals',
      'Wear protective mask in polluted areas',
      'Use protective equipment at work',
      'Maintain a healthy immune system',
      'Manage chronic conditions properly'
    ],
    image: '/src/assets/clinic-doctor-desk.jpg'
  },
  'interstitial-lung': {
    id: 'interstitial-lung',
    icon: Microscope,
    title: 'Interstitial Lung Disease',
    subtitle: 'Specialized Care for Lung Tissue Disorders',
    description: 'Interstitial lung diseases (ILD) are a group of disorders causing progressive scarring of lung tissue. Our specialized program offers expert diagnosis, monitoring, and treatment of various ILDs using advanced diagnostic techniques and cutting-edge therapies.',
    causes: [
      'Occupational exposures (asbestos, silica)',
      'Autoimmune diseases (rheumatoid arthritis, scleroderma)',
      'Certain medications and drugs',
      'Radiation therapy',
      'Chronic hypersensitivity pneumonitis',
      'Idiopathic pulmonary fibrosis (unknown cause)',
      'Sarcoidosis',
      'Environmental exposures'
    ],
    symptoms: [
      'Progressive shortness of breath',
      'Dry, persistent cough',
      'Fatigue and weakness',
      'Unexplained weight loss',
      'Chest discomfort',
      'Clubbing of fingers and toes',
      'Crackling sounds in lungs',
      'Rapid, shallow breathing'
    ],
    procedures: {
      title: 'Diagnostic Evaluation',
      steps: [
        'Comprehensive medical and exposure history',
        'High-resolution CT scan of chest',
        'Pulmonary function tests with DLCO',
        'Six-minute walk test with oxygen monitoring',
        'Blood tests for autoimmune markers',
        'Bronchoscopy with bronchoalveolar lavage',
        'Lung biopsy when indicated',
        'Echocardiogram for heart function',
        'Multidisciplinary team review'
      ]
    },
    devices: [
      'High-resolution CT scanners',
      'Bronchoscopy equipment',
      'Oxygen therapy systems',
      'Pulmonary function testing equipment',
      'Exercise testing apparatus',
      'Home oxygen concentrators',
      'Pulse oximeters for monitoring'
    ],
    treatment: {
      title: 'Treatment Strategies',
      options: [
        'Antifibrotic medications (pirfenidone, nintedanib)',
        'Immunosuppressive therapy for specific ILDs',
        'Corticosteroids for inflammation',
        'Oxygen therapy as needed',
        'Pulmonary rehabilitation',
        'Management of gastroesophageal reflux',
        'Treatment of underlying autoimmune disease',
        'Lung transplant evaluation for advanced cases',
        'Supportive care and symptom management',
        'Clinical trial participation when appropriate'
      ]
    },
    prevention: [
      'Avoid occupational lung exposures',
      'Use proper protective equipment at work',
      'Quit smoking immediately',
      'Regular monitoring if at risk',
      'Early treatment of autoimmune conditions',
      'Avoid environmental triggers',
      'Follow medication regimen carefully',
      'Regular follow-up with specialist'
    ],
    image: '/src/assets/clinic-patient-consultation.jpg'
  },
  'smoking-cessation': {
    id: 'smoking-cessation',
    icon: Moon,
    title: 'Smoking Cessation',
    subtitle: 'Comprehensive Support to Quit Smoking Successfully',
    description: 'Quitting smoking is one of the best things you can do for your health. Our comprehensive smoking cessation program combines counseling, medication management, and ongoing support to help you quit successfully and stay smoke-free for life.',
    causes: [
      'Nicotine addiction and dependence',
      'Psychological habituation',
      'Social and environmental triggers',
      'Stress and emotional factors',
      'Genetic susceptibility to addiction',
      'Early smoking initiation',
      'Peer influence and social factors',
      'Mental health conditions'
    ],
    symptoms: [
      'Strong cravings for cigarettes',
      'Irritability and mood changes',
      'Difficulty concentrating',
      'Increased appetite',
      'Sleep disturbances',
      'Anxiety and restlessness',
      'Depression',
      'Physical discomfort during withdrawal'
    ],
    procedures: {
      title: 'Smoking Cessation Program',
      steps: [
        'Assessment of smoking history and dependence',
        'Evaluation of quit readiness',
        'Development of personalized quit plan',
        'Setting a quit date',
        'Behavioral counseling sessions',
        'Medication evaluation and prescription',
        'Trigger identification and coping strategies',
        'Regular follow-up and support',
        'Relapse prevention planning',
        'Long-term maintenance support'
      ]
    },
    devices: [
      'Nicotine replacement patches',
      'Nicotine gum and lozenges',
      'Nicotine nasal spray',
      'Nicotine inhaler',
      'Prescription medications (varenicline, bupropion)',
      'Carbon monoxide monitors',
      'Support apps and digital tools'
    ],
    treatment: {
      title: 'Quit Smoking Strategies',
      options: [
        'Nicotine replacement therapy (NRT)',
        'Prescription medications (Chantix, Zyban)',
        'Combination pharmacotherapy',
        'Individual counseling',
        'Group support sessions',
        'Behavioral therapy and CBT',
        'Stress management techniques',
        'Trigger avoidance strategies',
        'Healthy lifestyle modifications',
        'Ongoing support and follow-up',
        'Relapse intervention if needed'
      ]
    },
    prevention: [
      'Avoid smoking triggers and situations',
      'Develop healthy coping mechanisms',
      'Exercise regularly to manage stress',
      'Stay busy with positive activities',
      'Remove all smoking materials',
      'Tell friends and family about your quit plan',
      'Join support groups',
      'Use medications as prescribed',
      'Practice relaxation techniques',
      'Celebrate milestones and success'
    ],
    image: '/src/assets/doctor-portrait.jpg'
  },
  'immunization': {
    id: 'immunization',
    icon: Syringe,
    title: 'Immunization Services',
    subtitle: 'Preventive Care for Optimal Lung Health',
    description: 'Immunizations are crucial for preventing respiratory infections that can seriously impact lung health. Our comprehensive immunization services include flu shots, pneumonia vaccines, and other respiratory-related vaccinations to protect you from preventable diseases.',
    causes: [
      'Need for disease prevention',
      'High-risk medical conditions',
      'Age-related vulnerabilities',
      'Compromised immune system',
      'Chronic lung disease',
      'Healthcare worker exposure',
      'International travel',
      'Community outbreaks'
    ],
    symptoms: [
      'Prevention of influenza symptoms',
      'Prevention of pneumonia complications',
      'Reduced risk of respiratory infections',
      'Protection against whooping cough',
      'Prevention of COVID-19 severity',
      'Reduced hospitalizations',
      'Lower mortality risk',
      'Community immunity contribution'
    ],
    procedures: {
      title: 'Immunization Protocol',
      steps: [
        'Review of vaccination history',
        'Assessment of risk factors',
        'Evaluation for contraindications',
        'Selection of appropriate vaccines',
        'Pre-vaccination counseling',
        'Vaccine administration',
        'Post-vaccination monitoring',
        'Documentation and record keeping',
        'Scheduling of follow-up doses',
        'Adverse event management if needed'
      ]
    },
    devices: [
      'Pre-filled vaccine syringes',
      'Multi-dose vaccine vials',
      'Single-use needles and syringes',
      'Vaccine storage refrigerators',
      'Temperature monitoring devices',
      'Epinephrine auto-injectors for allergic reactions',
      'Vaccine administration records'
    ],
    treatment: {
      title: 'Recommended Vaccinations',
      options: [
        'Annual influenza vaccine',
        'Pneumococcal vaccines (PCV13, PPSV23)',
        'COVID-19 vaccination and boosters',
        'Tdap vaccine (tetanus, diphtheria, pertussis)',
        'Shingles vaccine for older adults',
        'Hepatitis vaccines for high-risk individuals',
        'MMR vaccine if needed',
        'Meningococcal vaccine for certain populations',
        'RSV vaccine for eligible patients',
        'Travel-related vaccines as needed'
      ]
    },
    prevention: [
      'Stay up-to-date with recommended vaccines',
      'Get annual flu shot every fall',
      'Follow pneumonia vaccine schedule',
      'Keep vaccination records current',
      'Inform healthcare providers of allergies',
      'Report any adverse reactions',
      'Practice good hygiene in addition to vaccination',
      'Encourage family members to get vaccinated'
    ],
    image: '/src/assets/clinic-interior.jpg'
  },
  'occupational-lung': {
    id: 'occupational-lung',
    icon: Shield,
    title: 'Occupational Lung Disease',
    subtitle: 'Expert Care for Work-Related Respiratory Conditions',
    description: 'Occupational lung diseases develop from prolonged exposure to harmful substances in the workplace. Our specialized program provides expert evaluation, management, and workplace accommodation guidance for various work-related respiratory conditions.',
    causes: [
      'Asbestos exposure (asbestosis)',
      'Silica dust inhalation (silicosis)',
      'Coal dust exposure (black lung disease)',
      'Metal fumes and particles',
      'Chemical vapors and gases',
      'Organic dust exposure',
      'Welding fumes',
      'Manufacturing processes',
      'Agricultural exposures',
      'Construction work hazards'
    ],
    symptoms: [
      'Progressive shortness of breath',
      'Chronic cough',
      'Chest tightness and pain',
      'Wheezing',
      'Reduced exercise tolerance',
      'Frequent respiratory infections',
      'Fatigue',
      'Symptoms worse during work week',
      'Improvement during time off work',
      'Weight loss in advanced cases'
    ],
    procedures: {
      title: 'Evaluation & Management',
      steps: [
        'Detailed occupational history',
        'Workplace exposure assessment',
        'Physical examination',
        'Chest X-ray and high-resolution CT',
        'Pulmonary function testing',
        'Bronchoscopy if indicated',
        'Lung biopsy when necessary',
        'Functional capacity evaluation',
        'Workplace accommodation assessment',
        'Workers compensation evaluation'
      ]
    },
    devices: [
      'Personal protective equipment (respirators)',
      'Air sampling and monitoring devices',
      'Spirometers for surveillance',
      'Peak flow meters',
      'Oxygen therapy equipment',
      'Dust masks and N95 respirators',
      'HEPA filtration systems'
    ],
    treatment: {
      title: 'Treatment & Management',
      options: [
        'Removal from exposure (most important)',
        'Bronchodilators for airway symptoms',
        'Corticosteroids for inflammation',
        'Oxygen therapy as needed',
        'Pulmonary rehabilitation',
        'Treatment of complications',
        'Workplace modifications and accommodations',
        'Legal and compensation guidance',
        'Smoking cessation if applicable',
        'Regular monitoring and surveillance',
        'Supportive care for advanced disease'
      ]
    },
    prevention: [
      'Use proper protective equipment at all times',
      'Follow workplace safety protocols',
      'Participate in regular health surveillance',
      'Report unsafe conditions',
      'Ensure adequate ventilation',
      'Practice proper hygiene (wash hands, face)',
      'Change clothes before going home',
      'Do not eat or drink in exposure areas',
      'Get regular medical checkups',
      'Know your rights regarding workplace safety'
    ],
    image: '/src/assets/clinic-doctor-desk.jpg'
  }
};
