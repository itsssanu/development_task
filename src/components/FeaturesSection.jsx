import { LabIcon } from '../assets/icons/LabIcon';
import { AcademicIcon } from '../assets/icons/AcademicIcon';
import { IndustryIcon } from '../assets/icons/IndustryIcon';
import { TrainingIcon } from '../assets/icons/TrainingIcon';

export const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: LabIcon,
      title: 'Advanced Laboratories & Facilities',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore'
    },
    {
      id: 2,
      icon: TrainingIcon,
      title: 'Hands-On Clinical Training',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore'
    },
    {
      id: 3,
      icon: AcademicIcon,
      title: 'Personalized Academic Mentorship',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore'
    },
    {
      id: 4,
      icon: IndustryIcon,
      title: 'Industry Internships',
      description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore'
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-sm text-gray-800">Why Choose</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-900">
          Shape The Future Of Healthcare Education
        </h1>

        {/* Features Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column - 2 Cards */}
          <div className="space-y-6">
            {features.slice(0, 2).map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-10 h-8" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-yellow-200 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-yellow-300 rounded-3xl overflow-hidden">
                <img
                  src="src/assets/icons/images/doctor.png"
                  alt="Healthcare Professional"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column - 2 Cards */}
          <div className="space-y-6">
            {features.slice(2, 4).map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-10 h-8" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}