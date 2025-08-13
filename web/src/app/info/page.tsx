'use client';

import { useState } from 'react';
import { PageLayout, Section } from '@/components/layout';
import { Button, Card } from '@/components/ui';

export default function InfoPage() {
  const [activeTab, setActiveTab] = useState<'about' | 'plant-care' | 'rabbit-care' | 'visit'>('about');

  const plantCareGuides = [
    {
      id: 1,
      title: 'Indoor Plant Care Basics',
      category: 'Beginner',
      description: 'Essential tips for keeping your indoor plants healthy and thriving.',
      tips: [
        'Place plants near windows for natural light',
        'Water when soil feels dry to touch',
        'Rotate plants weekly for even growth',
        'Use well-draining potting soil',
        'Monitor for pests regularly'
      ]
    },
    {
      id: 2,
      title: 'Succulent Care Guide',
      category: 'Easy',
      description: 'Low-maintenance care for succulents and cacti.',
      tips: [
        'Water deeply but infrequently',
        'Provide bright, indirect sunlight',
        'Use cactus-specific soil mix',
        'Allow soil to dry completely between waterings',
        'Avoid overwatering - main cause of death'
      ]
    },
    {
      id: 3,
      title: 'Herb Garden Maintenance',
      category: 'Intermediate',
      description: 'Growing and maintaining fresh herbs for cooking.',
      tips: [
        'Harvest regularly to encourage growth',
        'Pinch flowers to keep leaves tender',
        'Water at soil level to prevent disease',
        'Provide 6+ hours of sunlight daily',
        'Use organic fertilizer monthly'
      ]
    }
  ];

  const rabbitCareGuides = [
    {
      id: 1,
      title: 'New Rabbit Owner Guide',
      category: 'Beginner',
      description: 'Everything you need to know about caring for your first rabbit.',
      tips: [
        'Provide spacious hutch with hiding spots',
        'Feed high-quality hay and pellets',
        'Offer fresh vegetables daily',
        'Schedule regular vet checkups',
        'Handle gently and support hindquarters'
      ]
    },
    {
      id: 2,
      title: 'Rabbit Nutrition Essentials',
      category: 'Important',
      description: 'Proper diet and feeding guidelines for healthy rabbits.',
      tips: [
        'Unlimited timothy hay for adults',
        '1/4 cup pellets per 5 lbs body weight',
        'Introduce new foods gradually',
        'Avoid iceberg lettuce and sugary treats',
        'Fresh water available at all times'
      ]
    },
    {
      id: 3,
      title: 'Rabbit Health & Grooming',
      category: 'Advanced',
      description: 'Maintaining your rabbit&apos;s health and appearance.',
      tips: [
        'Brush regularly to prevent matting',
        'Trim nails every 4-6 weeks',
        'Check ears and teeth regularly',
        'Watch for changes in eating/behavior',
        'Spay/neuter for health benefits'
      ]
    }
  ];

  return (
    <PageLayout cartCount={0}>
      {/* Page Header */}
      <Section className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white" padding="lg">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">📚 Care & Information Center</h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Learn everything you need to know about plant and rabbit care, plus information about our nursery
          </p>
        </div>
      </Section>

      {/* Tab Navigation */}
      <Section className="bg-white border-b" padding="sm">
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            onClick={() => setActiveTab('about')}
            variant={activeTab === 'about' ? 'primary' : 'outline'}
            size="sm"
          >
            🏪 About Us
          </Button>
          <Button
            onClick={() => setActiveTab('plant-care')}
            variant={activeTab === 'plant-care' ? 'primary' : 'outline'}
            size="sm"
          >
            🌿 Plant Care
          </Button>
          <Button
            onClick={() => setActiveTab('rabbit-care')}
            variant={activeTab === 'rabbit-care' ? 'primary' : 'outline'}
            size="sm"
          >
            🐰 Rabbit Care
          </Button>
          <Button
            onClick={() => setActiveTab('visit')}
            variant={activeTab === 'visit' ? 'primary' : 'outline'}
            size="sm"
          >
            📍 Visit Us
          </Button>
        </div>
      </Section>

      {/* About Us Tab */}
      {activeTab === 'about' && (
        <>
          <Section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Lem Plant</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Welcome to Lem Plant, your trusted source for healthy plants and adorable rabbits.
                We've been serving the community with premium quality plants and well-cared rabbits from trusted breeders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Story</h3>
                <p className="text-gray-600 mb-4">
                  Founded with a passion for nurturing life, Lem Plant has been serving the community
                  for over a decade. We believe that every home deserves the joy and beauty that plants
                  and rabbits bring to our lives.
                </p>
                <p className="text-gray-600 mb-6">
                  Our commitment to quality means we carefully select every plant and work with trusted
                  breeders to ensure our rabbits are healthy, socialized, and ready to become part of your family.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-[#2E7D32] mr-3">✓</span>
                    <span>Over 10 years of experience</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#2E7D32] mr-3">✓</span>
                    <span>Trusted by thousands of customers</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#2E7D32] mr-3">✓</span>
                    <span>Expert care and guidance</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] rounded-lg p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">What We Offer</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">🌿 Premium Plants</h4>
                    <p className="text-green-100 text-sm">Indoor and outdoor varieties, healthy specimens, care instructions included</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">🐰 Quality Rabbits</h4>
                    <p className="text-green-100 text-sm">Various breeds, health guarantees, socialized and well-cared</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">🎓 Expert Support</h4>
                    <p className="text-green-100 text-sm">Ongoing care guidance, educational resources, community support</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </>
      )}
      {/* Plant Care Tab */}
      {activeTab === 'plant-care' && (
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🌿 Plant Care Guides</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn how to keep your plants healthy and thriving with our comprehensive care guides
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plantCareGuides.map((guide) => (
              <Card key={guide.id} hover className="h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                    <span className="px-2 py-1 bg-[#2E7D32] text-white text-xs rounded-full">
                      {guide.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{guide.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Key Tips:</h4>
                    <ul className="space-y-1">
                      {guide.tips.map((tip, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-[#2E7D32] mr-2 mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Plant Care Resources */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🌱 Quick Plant Care Tips</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Common Signs of Healthy Plants:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Vibrant, consistent leaf color</li>
                  <li>• New growth appearing regularly</li>
                  <li>• Firm, upright stems</li>
                  <li>• No signs of pests or disease</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Warning Signs to Watch For:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Yellowing or browning leaves</li>
                  <li>• Wilting despite adequate water</li>
                  <li>• Stunted or no new growth</li>
                  <li>• Visible pests or white spots</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Rabbit Care Tab */}
      {activeTab === 'rabbit-care' && (
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🐰 Rabbit Care Guides</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know to provide the best care for your rabbit companion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rabbitCareGuides.map((guide) => (
              <Card key={guide.id} hover className="h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full">
                      {guide.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{guide.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Essential Tips:</h4>
                    <ul className="space-y-1">
                      {guide.tips.map((tip, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-orange-500 mr-2 mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Rabbit Care Resources */}
          <div className="mt-12 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🐰 Rabbit Health Checklist</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Daily Health Checks:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Eating and drinking normally</li>
                  <li>• Active and alert behavior</li>
                  <li>• Normal droppings production</li>
                  <li>• Clear eyes and nose</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">When to Contact a Vet:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Not eating for 12+ hours</li>
                  <li>• Difficulty breathing</li>
                  <li>• Unusual discharge from eyes/nose</li>
                  <li>• Lethargy or hiding behavior</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Visit Us Tab */}
      {activeTab === 'visit' && (
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📍 Visit Our Nursery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Come see our plants and rabbits in person. We&apos;re here to help you find the perfect addition to your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">🏪 Location & Hours</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Address</h4>
                  <div className="text-gray-600">
                    <p className="font-medium">Lem Plant Nursery</p>
                    <p>123 Green Valley Road</p>
                    <p>Garden City, State 12345</p>
                    <p>United States</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Business Hours</h4>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Contact</h4>
                  <div className="space-y-1 text-gray-600">
                    <p>📞 Phone: (555) 123-4567</p>
                    <p>📧 Email: info@lemplant.com</p>
                    <p>🌐 Website: www.lemplant.com</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">📦 Pickup Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Pickup Process</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#2E7D32] mr-2 mt-1">1.</span>
                      <span>Place your order online</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2E7D32] mr-2 mt-1">2.</span>
                      <span>Receive confirmation email</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2E7D32] mr-2 mt-1">3.</span>
                      <span>Visit during business hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2E7D32] mr-2 mt-1">4.</span>
                      <span>Show confirmation at pickup</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">What to Expect</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Free parking available on-site</li>
                    <li>• Staff assistance with loading</li>
                    <li>• Care instructions provided</li>
                    <li>• Questions answered by experts</li>
                    <li>• 7-day pickup window</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Special Services</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Large order assistance</li>
                    <li>• Plant care consultations</li>
                    <li>• Rabbit handling demonstrations</li>
                    <li>• Custom care plan creation</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      )}
    </PageLayout>
  );
}
