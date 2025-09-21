import React, { useMemo } from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = ({ projects }) => {
  const stats = React.useMemo(() => {
    const totalRevenue = projects?.reduce((sum, project) => sum + project?.metrics?.revenue, 0);
    const avgPerformance = Math.round(
      projects?.reduce((sum, project) => sum + project?.metrics?.performance, 0) / projects?.length
    );
    const avgConversion = Math.round(
      projects?.reduce((sum, project) => sum + project?.metrics?.conversion, 0) / projects?.length
    );
    const totalProjects = projects?.length;
    const featuredProjects = projects?.filter(p => p?.featured)?.length;
    
    // Get unique technologies
    const allTechnologies = projects?.flatMap(p => p?.technologies);
    const uniqueTechnologies = [...new Set(allTechnologies)]?.length;

    return {
      totalRevenue,
      avgPerformance,
      avgConversion,
      totalProjects,
      featuredProjects,
      uniqueTechnologies
    };
  }, [projects]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })?.format(amount);
  };

  const statItems = [
    {
      icon: 'Briefcase',
      label: 'Total Proyek',
      value: stats?.totalProjects,
      suffix: '+',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20'
    },
    {
      icon: 'TrendingUp',
      label: 'Total Revenue Impact',
      value: formatCurrency(stats?.totalRevenue),
      suffix: '',
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20'
    },
    {
      icon: 'Zap',
      label: 'Rata-rata Performance',
      value: stats?.avgPerformance,
      suffix: '/100',
      color: 'text-brand-purple',
      bgColor: 'bg-brand-purple/10',
      borderColor: 'border-brand-purple/20'
    },
    {
      icon: 'Target',
      label: 'Rata-rata Konversi',
      value: stats?.avgConversion,
      suffix: '%',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/20'
    },
    {
      icon: 'Star',
      label: 'Proyek Unggulan',
      value: stats?.featuredProjects,
      suffix: '',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20'
    },
    {
      icon: 'Code2',
      label: 'Teknologi Dikuasai',
      value: stats?.uniqueTechnologies,
      suffix: '+',
      color: 'text-brand-purple',
      bgColor: 'bg-brand-purple/10',
      borderColor: 'border-brand-purple/20'
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Portfolio <span className="gradient-text">Statistics</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Angka-angka yang menunjukkan dampak nyata dari setiap proyek yang telah diselesaikan 
          dan kontribusi terhadap kesuksesan bisnis klien.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statItems?.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border ${stat?.bgColor} ${stat?.borderColor} hover-lift smooth-transition group`}
          >
            <div className="text-center">
              <div className={`w-12 h-12 ${stat?.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 smooth-transition`}>
                <Icon name={stat?.icon} size={24} className={stat?.color} />
              </div>
              
              <div className={`text-2xl font-bold ${stat?.color} mb-1`}>
                {typeof stat?.value === 'string' && stat?.value?.includes('Rp') 
                  ? stat?.value 
                  : `${stat?.value}${stat?.suffix}`
                }
              </div>
              
              <div className="text-xs text-text-secondary font-medium">
                {stat?.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Additional Insights */}
      <div className="mt-8 p-6 bg-gradient-to-r from-accent/5 to-brand-purple/5 rounded-xl border border-accent/10">
        <div className="flex items-center justify-center space-x-8 text-center">
          <div>
            <div className="text-lg font-bold text-foreground">100%</div>
            <div className="text-sm text-text-secondary">Client Satisfaction</div>
          </div>
          <div className="w-px h-8 bg-border/50"></div>
          <div>
            <div className="text-lg font-bold text-foreground">&lt; 3s</div>
            <div className="text-sm text-text-secondary">Avg Load Time</div>
          </div>
          <div className="w-px h-8 bg-border/50"></div>
          <div>
            <div className="text-lg font-bold text-foreground">24/7</div>
            <div className="text-sm text-text-secondary">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;