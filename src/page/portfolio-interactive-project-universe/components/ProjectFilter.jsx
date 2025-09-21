import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  technologies,
  activeTechnology,
  onTechnologyChange,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange 
}) => {
  const sortOptions = [
    { value: 'newest', label: 'Terbaru', icon: 'Calendar' },
    { value: 'featured', label: 'Unggulan', icon: 'Star' },
    { value: 'revenue', label: 'Revenue Tertinggi', icon: 'TrendingUp' },
    { value: 'performance', label: 'Performa Terbaik', icon: 'Zap' }
  ];

  return (
    <div className="bg-card/50 backdrop-blur-lg rounded-xl p-6 border border-border/50 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" 
        />
        <input
          type="text"
          placeholder="Cari proyek berdasarkan nama, teknologi, atau deskripsi..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent smooth-transition"
        />
      </div>
      {/* Category Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
          <Icon name="Folder" size={16} className="mr-2 text-accent" />
          Kategori Industri
        </h4>
        <div className="flex flex-wrap gap-2">
          {categories?.map((category) => (
            <Button
              key={category?.value}
              variant={activeCategory === category?.value ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category?.value)}
              className={activeCategory === category?.value 
                ? "gradient-button" :"border-border/50 text-text-secondary hover:text-accent hover:border-accent/30"
              }
            >
              <Icon name={category?.icon} size={14} className="mr-2" />
              {category?.label}
              <span className="ml-2 px-2 py-0.5 bg-current/20 rounded-full text-xs">
                {category?.count}
              </span>
            </Button>
          ))}
        </div>
      </div>
      {/* Technology Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
          <Icon name="Code2" size={16} className="mr-2 text-brand-purple" />
          Teknologi
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech) => (
            <Button
              key={tech?.value}
              variant={activeTechnology === tech?.value ? "default" : "ghost"}
              size="sm"
              onClick={() => onTechnologyChange(tech?.value)}
              className={activeTechnology === tech?.value 
                ? "bg-brand-purple text-white" :"text-text-secondary hover:text-brand-purple hover:bg-brand-purple/10"
              }
            >
              {tech?.label}
              <span className="ml-2 text-xs opacity-70">
                {tech?.count}
              </span>
            </Button>
          ))}
        </div>
      </div>
      {/* Sort Options */}
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-foreground flex items-center">
          <Icon name="ArrowUpDown" size={16} className="mr-2 text-accent" />
          Urutkan Berdasarkan
        </h4>
        <div className="flex space-x-2">
          {sortOptions?.map((option) => (
            <Button
              key={option?.value}
              variant={sortBy === option?.value ? "default" : "ghost"}
              size="sm"
              onClick={() => onSortChange(option?.value)}
              className={sortBy === option?.value 
                ? "gradient-button" :"text-text-secondary hover:text-accent"
              }
            >
              <Icon name={option?.icon} size={14} className="mr-2" />
              {option?.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;