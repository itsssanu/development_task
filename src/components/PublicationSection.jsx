import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const PublicationSection = () => {
  const [activeTab, setActiveTab] = useState('awards');

  const tabs = [
    { id: 'publication', label: 'Publication Details' },
    { id: 'awards', label: 'Awards And Achievements' },
    { id: 'workshops', label: 'Workshops / Seminars' },
    { id: 'experience', label: 'Work Experience' }
  ];

  const tabContent = {
    publication: {
      title: 'PUBLICATION DETAILS',
      items: [
        'Molecular mechanisms of cardiac development and regeneration. Published in Nature Medicine, 2022. Impact Factor: 87.2',
        'Novel therapeutic approaches for pediatric cardiology. Journal of Pediatric Medicine, 2021. Co-authored with international research team',
        'Genetic markers in congenital heart disease. Published in The Lancet, 2020. Featured as Editor\'s Choice',
        'Stem cell therapy in cardiac repair mechanisms. Cell Research Journal, 2019. Cited by over 200 publications',
        'Comparative study of heart failure treatments in elderly patients. American Journal of Cardiology, 2018',
        'Biomarkers for early detection of cardiovascular diseases. Clinical Chemistry, 2017. Collaborative international study',
        'Pharmacological interventions in acute coronary syndrome. British Medical Journal, 2016',
        'Long-term outcomes of cardiac rehabilitation programs. European Heart Journal, 2015'
      ]
    },
    awards: {
      title: 'HONORS / AWARDS',
      items: [
        'University Research Fellowship Award (2002) From University Of Madras, Chennai.',
        'Senior Research Fellowship Award (2003 & 2004) From Council Of Scientific And Industrial Research (CSIR), Government Of India, New Delhi, India',
        'Post-Doctoral Fellowship (2005) From The Department Of Physiology & Biophysics, University Of Calgary, Calgary, AB. Canada Department',
        'Best Post-Doctoral Trainee Award (2006) From The Department Of Physiology & Biophysics, University Of Calgary, Calgary, AB. Canada',
        'Travel Award (2007) From Canadian Institute Of Health Research (CIHR) - Training Program In Genetics, Child Development And Health (TPGCDH), University Of Calgary, Calgary, AB. Canada',
        'Post-Doctoral Fellowship Award (2007 & 2008) From CIHR - TPGCDH, University Of Calgary, Calgary, AB. Canada',
        'Child Health Research Travel Grant (2008) From Institute Of Child And Maternal Health (ICMH) And Alberta Children\'s Hospital (ACH), Calgary Health Region (CHR), Calgary, AB. Canada',
        'Travel Award (2008) From CIHR - TPGCDH, Univ. Of Calgary, Calgary, AB. Canada & CIHR - Institute Of Human Development, Child And Youth Health (IHDCYH), Ottawa, QC. Canada',
        'Bechtel Estate Best Post-Doctoral Fellow Award (2009) From ICMH, University Of Calgary, Calgary, AB. Canada',
        'Dr. APJ Abdul Kalam Best Teacher Award (2023) From Chettinad Academy Of Research & Education, Kelambakkam, Chennai, Tamilnadu, India',
        'Appreciation For Academic Excellence And Contribution In Academia (2023) At New Normal Education Leadership Summit In Chennai By Linkedin And Ardorcomm Group Of India, New Delhi, India'
      ]
    },
    workshops: {
      title: 'WORKSHOPS / SEMINARS',
      items: [
        'International Conference on Advanced Cardiac Care (2023) - Keynote Speaker on "Future of Cardiovascular Medicine", Chennai, India',
        'Workshop on Clinical Research Methodology (2023) - Resource Person, AIIMS New Delhi, India',
        'Advanced ECG Interpretation Workshop (2022) - Lead Trainer, Canadian Medical Association, Calgary, AB',
        'Pediatric Emergency Medicine Seminar (2022) - Guest Lecturer, University of Calgary Medical School',
        'National Symposium on Heart Health (2021) - Panel Discussion Moderator, Indian Medical Association',
        'Hands-on Training in Echocardiography (2021) - Workshop Coordinator, Alberta Children\'s Hospital',
        'Research Ethics and Good Clinical Practice (2020) - Invited Speaker, Health Canada',
        'Innovations in Cardiac Imaging Techniques (2019) - Workshop Facilitator, International Society of Cardiology',
        'Faculty Development Program on Medical Education (2018) - Resource Person, Medical Council of India'
      ]
    },
    experience: {
      title: 'WORK EXPERIENCE',
      items: [
        'Professor & Head of Department (2020 - Present) - Department of Cardiology, Chettinad Academy of Research & Education, Chennai, India',
        'Associate Professor (2015 - 2020) - Department of Physiology & Biophysics, University of Calgary, Calgary, AB, Canada',
        'Assistant Professor (2010 - 2015) - Faculty of Medicine, University of Calgary, Calgary, AB, Canada',
        'Post-Doctoral Research Fellow (2005 - 2010) - Alberta Children\'s Hospital Research Institute, Calgary, AB, Canada',
        'Senior Research Fellow (2003 - 2005) - Council of Scientific and Industrial Research (CSIR), New Delhi, India',
        'Research Fellow (2002 - 2003) - Department of Physiology, University of Madras, Chennai, India',
        'Consultant Cardiologist (Part-time, 2016 - Present) - Apollo Hospitals, Chennai, India',
        'Visiting Faculty (2018 - Present) - Multiple medical institutions across India and Canada for specialized training programs'
      ]
    }
  };

  const currentIndex = tabs.findIndex(tab => tab.id === activeTab);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-yellow-100 to-yellow-200 py-16 px-4" id="publication">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Navigation Tabs */}
          <div className="flex items-center bg-gray-50 px-6 py-4 overflow-hidden">

            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`flex-shrink-0 p-2 rounded-lg transition-all ${currentIndex === 0
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-200'
                }`}
              aria-label="Previous tab"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div
              className="
                flex-1 flex items-center justify-start gap-3 px-4
                overflow-x-auto hide-scrollbar tab-scroll snap-x snap-mandatory
              "
              role="tablist"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex-shrink-0 min-w-max px-6 py-2 text-sm font-medium whitespace-nowrap rounded-full
                      transition transform duration-200 ease-in-out
                      focus:outline-none focus:ring-0 border-0 snap-start
                      ${isActive
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-100'}
                    `}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentIndex === tabs.length - 1}
              className={`flex-shrink-0 p-2 rounded-lg transition-all ${currentIndex === tabs.length - 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-200'
                }`}
              aria-label="Next tab"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Content Area */}
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">
              {tabContent[activeTab].title}
            </h2>

            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {tabContent[activeTab].items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-gray-600 font-medium">
                    {index + 1}.
                  </span>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};