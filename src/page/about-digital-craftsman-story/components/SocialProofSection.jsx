import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SocialProofSection = () => {
  const [activeTab, setActiveTab] = useState('github');

  const githubStats = {
    contributions: 1247,
    repositories: 45,
    followers: 234,
    stars: 892,
    languages: ['JavaScript', 'TypeScript', 'Python', 'Go'],
    topRepos: [
      {
        name: 'react-dashboard-pro',
        description: 'Modern React dashboard with advanced analytics',
        stars: 156,
        forks: 34,
        language: 'TypeScript'
      },
      {
        name: 'nextjs-ecommerce-starter',
        description: 'Full-stack e-commerce solution with Next.js',
        stars: 203,
        forks: 67,
        language: 'JavaScript'
      },
      {
        name: 'tailwind-components-lib',
        description: 'Reusable Tailwind CSS components library',
        stars: 89,
        forks: 23,
        language: 'CSS'
      }
    ]
  };

  const stackOverflowStats = {
    reputation: 3456,
    badges: { gold: 2, silver: 15, bronze: 34 },
    answers: 127,
    questions: 23,
    topTags: ['javascript', 'react', 'node.js', 'typescript', 'css'],
    recentActivity: [
      {
        type: 'answer',
        title: 'How to optimize React component re-renders?',
        votes: 15,
        accepted: true
      },
      {
        type: 'answer',
        title: 'Best practices for Next.js API routes',
        votes: 12,
        accepted: false
      },
      {
        type: 'question',
        title: 'TypeScript generic constraints with React hooks',
        votes: 8,
        accepted: true
      }
    ]
  };

  const communityStats = {
    conferences: [
      {
        name: 'React Indonesia Conference 2024',
        role: 'Speaker',
        topic: 'Building Scalable React Applications',
        attendees: 500
      },
      {
        name: 'JavaScript Jakarta Meetup',
        role: 'Organizer',
        topic: 'Modern Frontend Development',
        attendees: 150
      }
    ],
    articles: [
      {
        title: 'Membangun Aplikasi React yang Scalable',
        platform: 'Medium',
        views: 2340,
        claps: 156
      },
      {
        title: 'Next.js vs Create React App: Mana yang Lebih Baik?',
        platform: 'Dev.to',
        views: 1890,
        reactions: 89
      }
    ],
    mentoring: {
      students: 45,
      sessions: 120,
      rating: 4.9
    }
  };

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CSA-2023-001',
      verified: true
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-PD-2023-002',
      verified: true
    },
    {
      name: 'Meta Frontend Developer Professional',
      issuer: 'Meta (Facebook)',
      date: '2022',
      credentialId: 'META-FE-2022-003',
      verified: true
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      credentialId: 'MDB-DEV-2022-004',
      verified: true
    }
  ];

  const tabs = [
    { id: 'github', label: 'GitHub Activity', icon: 'Github' },
    { id: 'stackoverflow', label: 'Stack Overflow', icon: 'HelpCircle' },
    { id: 'community', label: 'Community', icon: 'Users' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Social Proof</span> & Kredibilitas
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Bukti nyata kontribusi dan pengakuan dari komunitas developer global serta industri teknologi
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {tabs?.map((tab) => (
            <motion.button
              key={tab?.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'bg-gradient-to-r from-accent to-brand-purple text-white shadow-lg'
                  : 'bg-card/50 text-text-secondary hover:bg-card hover:text-foreground border border-border/50'
              }`}
            >
              <Icon name={tab?.icon} size={20} />
              <span className="font-medium">{tab?.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl"
        >
          {/* GitHub Tab */}
          {activeTab === 'github' && (
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center">
                  <Icon name="Github" size={32} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">GitHub Contributions</h3>
                  <p className="text-text-secondary">Open source contributions dan project portfolio</p>
                </div>
              </div>

              {/* GitHub Stats */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-muted/30 rounded-xl border border-border/30">
                  <div className="text-3xl font-bold gradient-text mb-2">{githubStats?.contributions}</div>
                  <div className="text-sm text-text-secondary">Contributions</div>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-xl border border-border/30">
                  <div className="text-3xl font-bold gradient-text mb-2">{githubStats?.repositories}</div>
                  <div className="text-sm text-text-secondary">Repositories</div>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-xl border border-border/30">
                  <div className="text-3xl font-bold gradient-text mb-2">{githubStats?.followers}</div>
                  <div className="text-sm text-text-secondary">Followers</div>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-xl border border-border/30">
                  <div className="text-3xl font-bold gradient-text mb-2">{githubStats?.stars}</div>
                  <div className="text-sm text-text-secondary">Total Stars</div>
                </div>
              </div>

              {/* Top Repositories */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6">Top Repositories</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {githubStats?.topRepos?.map((repo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-background rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h5 className="font-semibold text-foreground">{repo?.name}</h5>
                        <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">{repo?.language}</span>
                      </div>
                      <p className="text-text-secondary text-sm mb-4">{repo?.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-text-secondary">
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={14} />
                          <span>{repo?.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="GitFork" size={14} />
                          <span>{repo?.forks}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Stack Overflow Tab */}
          {activeTab === 'stackoverflow' && (
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Icon name="HelpCircle" size={32} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Stack Overflow Profile</h3>
                  <p className="text-text-secondary">Helping developers solve problems worldwide</p>
                </div>
              </div>

              {/* SO Stats */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-muted/30 rounded-xl border border-border/30">
                  <div className="text-3xl font-bold gradient-text mb-2">{stackOverflowStats?.reputation}</div>
                  <div className="text-sm text-text-secondary">Reputation</div>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-xl border border-border/30">
                  <div className="text-3xl font-bold gradient-text mb-2">{stackOverflowStats?.answers}</div>
                  <div className="text-sm text-text-secondary">Answers</div>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-xl border border-border/30">
                  <div className="text-3xl font-bold gradient-text mb-2">{stackOverflowStats?.questions}</div>
                  <div className="text-sm text-text-secondary">Questions</div>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-xl border border-border/30">
                  <div className="flex justify-center space-x-2 mb-2">
                    <span className="text-yellow-500 font-bold">{stackOverflowStats?.badges?.gold}</span>
                    <span className="text-gray-400 font-bold">{stackOverflowStats?.badges?.silver}</span>
                    <span className="text-orange-600 font-bold">{stackOverflowStats?.badges?.bronze}</span>
                  </div>
                  <div className="text-sm text-text-secondary">Badges</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6">Recent Activity</h4>
                <div className="space-y-4">
                  {stackOverflowStats?.recentActivity?.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border/50"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activity?.type === 'answer' ? 'bg-green-500/20' : 'bg-blue-500/20'
                      }`}>
                        <Icon 
                          name={activity?.type === 'answer' ? 'MessageSquare' : 'HelpCircle'} 
                          size={20} 
                          className={activity?.type === 'answer' ? 'text-green-500' : 'text-blue-500'} 
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-foreground">{activity?.title}</h5>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-text-secondary">{activity?.votes} votes</span>
                          {activity?.accepted && (
                            <span className="text-sm text-green-500 flex items-center">
                              <Icon name="Check" size={14} className="mr-1" />
                              Accepted
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Community Tab */}
          {activeTab === 'community' && (
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={32} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Community Involvement</h3>
                  <p className="text-text-secondary">Speaking, mentoring, and knowledge sharing</p>
                </div>
              </div>

              {/* Speaking & Events */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-foreground mb-6">Speaking & Events</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {communityStats?.conferences?.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-background rounded-xl border border-border/50"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-accent to-brand-purple rounded-lg flex items-center justify-center">
                          <Icon name="Mic" size={20} color="white" />
                        </div>
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">{event?.role}</span>
                      </div>
                      <h5 className="font-semibold text-foreground mb-2">{event?.name}</h5>
                      <p className="text-text-secondary text-sm mb-3">{event?.topic}</p>
                      <div className="flex items-center text-sm text-text-secondary">
                        <Icon name="Users" size={14} className="mr-1" />
                        {event?.attendees} attendees
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Articles & Content */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-foreground mb-6">Published Articles</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {communityStats?.articles?.map((article, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-background rounded-xl border border-border/50"
                    >
                      <h5 className="font-semibold text-foreground mb-3">{article?.title}</h5>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-accent font-medium">{article?.platform}</span>
                        <div className="flex items-center space-x-4 text-sm text-text-secondary">
                          <div className="flex items-center">
                            <Icon name="Eye" size={14} className="mr-1" />
                            {article?.views}
                          </div>
                          <div className="flex items-center">
                            <Icon name="Heart" size={14} className="mr-1" />
                            {article?.claps || article?.reactions}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mentoring */}
              <div className="bg-gradient-to-r from-accent/10 to-brand-purple/10 rounded-xl p-6 border border-accent/20">
                <h4 className="text-xl font-semibold text-foreground mb-4">Mentoring Impact</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-2">{communityStats?.mentoring?.students}</div>
                    <div className="text-sm text-text-secondary">Students Mentored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-2">{communityStats?.mentoring?.sessions}</div>
                    <div className="text-sm text-text-secondary">Mentoring Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-2">{communityStats?.mentoring?.rating}/5</div>
                    <div className="text-sm text-text-secondary">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={32} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Professional Certifications</h3>
                  <p className="text-text-secondary">Industry-recognized credentials and achievements</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {certifications?.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-background rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{cert?.name}</h4>
                        <p className="text-text-secondary text-sm mb-2">{cert?.issuer}</p>
                        <p className="text-text-secondary text-sm">Issued: {cert?.date}</p>
                      </div>
                      {cert?.verified && (
                        <div className="flex items-center space-x-1 text-green-500">
                          <Icon name="CheckCircle" size={20} />
                          <span className="text-sm font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-text-secondary font-mono bg-muted/30 px-3 py-2 rounded border border-border/30">
                      ID: {cert?.credentialId}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;