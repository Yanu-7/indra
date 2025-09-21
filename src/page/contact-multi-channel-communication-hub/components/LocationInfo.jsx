import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationInfo = () => {
  const [activeTab, setActiveTab] = useState('jakarta');

  const locations = {
    jakarta: {
      name: 'Jakarta Pusat',
      address: 'Jl. Thamrin No. 123, Menteng\nJakarta Pusat 10310',
      coordinates: { lat: -6.1944, lng: 106.8229 },
      availability: 'Senin - Jumat: 09:00 - 18:00',
      description: 'Kantor utama untuk meeting dan konsultasi langsung',
      facilities: [
        'Ruang meeting ber-AC',
        'Presentasi dengan proyektor',
        'WiFi kencang',
        'Parkir tersedia',
        'Akses transportasi umum'
      ],
      nearbyLandmarks: [
        'Plaza Indonesia (5 menit)',
        'Grand Indonesia (7 menit)',
        'Bundaran HI (10 menit)',
        'Stasiun Gondangdia (15 menit)'
      ]
    },
    remote: {
      name: 'Meeting Virtual',
      address: 'Google Meet / Zoom\nTersedia 24/7',
      coordinates: null,
      availability: 'Fleksibel sesuai jadwal',
      description: 'Video conference untuk klien di luar Jakarta',
      facilities: [
        'HD video quality',
        'Screen sharing',
        'Recording tersedia',
        'Chat support',
        'File sharing'
      ],
      platforms: [
        'Google Meet',
        'Zoom',
        'Microsoft Teams',
        'WhatsApp Video Call'
      ]
    }
  };

  const coverageAreas = [
    {
      area: 'Jakarta & Sekitarnya',
      zones: ['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Utara', 'Jakarta Timur'],
      meetingType: 'In-person / Virtual',
      responseTime: '2-4 jam',
      travelFee: 'Gratis'
    },
    {
      area: 'Jabodetabek',
      zones: ['Bogor', 'Depok', 'Tangerang', 'Bekasi'],
      meetingType: 'Virtual / In-person*',
      responseTime: '4-8 jam',
      travelFee: 'Rp 200.000 - 500.000'
    },
    {
      area: 'Indonesia',
      zones: ['Bandung', 'Surabaya', 'Yogyakarta', 'Bali', 'Kota Lainnya'],
      meetingType: 'Virtual Only',
      responseTime: '2-4 jam',
      travelFee: 'Virtual Meeting'
    }
  ];

  const currentLocation = locations?.[activeTab];

  const handleDirections = () => {
    if (currentLocation?.coordinates) {
      const { lat, lng } = currentLocation?.coordinates;
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
    }
  };

  const handleScheduleMeeting = (type) => {
    const message = type === 'in-person' 
      ? `Halo, saya ingin jadwalkan meeting di kantor Jakarta untuk diskusi proyek website.`
      : `Halo, saya ingin jadwalkan video call untuk diskusi proyek website.`;
    
    window.open(`https://wa.me/6285786476296?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="space-y-8">
      {/* Location Tabs */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">Lokasi & Meeting</h3>
        
        <div className="flex space-x-1 bg-muted rounded-lg p-1 mb-6">
          <button
            onClick={() => setActiveTab('jakarta')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium smooth-transition ${
              activeTab === 'jakarta' ?'bg-accent text-white' :'text-text-secondary hover:text-foreground'
            }`}
          >
            <Icon name="MapPin" size={16} className="mr-2 inline" />
            Jakarta Office
          </button>
          <button
            onClick={() => setActiveTab('remote')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium smooth-transition ${
              activeTab === 'remote' ?'bg-accent text-white' :'text-text-secondary hover:text-foreground'
            }`}
          >
            <Icon name="Video" size={16} className="mr-2 inline" />
            Virtual Meeting
          </button>
        </div>

        {/* Location Details */}
        <div className="bg-card rounded-2xl p-6 border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Location Info */}
            <div>
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Icon 
                    name={activeTab === 'jakarta' ? 'MapPin' : 'Video'} 
                    size={24} 
                    className="text-accent" 
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-1">
                    {currentLocation?.name}
                  </h4>
                  <p className="text-text-secondary whitespace-pre-line">
                    {currentLocation?.address}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-text-secondary" />
                  <span className="text-sm text-foreground">{currentLocation?.availability}</span>
                </div>
                <p className="text-sm text-text-secondary">{currentLocation?.description}</p>
              </div>

              {/* Facilities */}
              <div className="mb-6">
                <h5 className="font-semibold text-foreground mb-3">
                  {activeTab === 'jakarta' ? 'Fasilitas' : 'Platform'}
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {(currentLocation?.facilities || currentLocation?.platforms || [])?.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  onClick={() => handleScheduleMeeting(activeTab === 'jakarta' ? 'in-person' : 'virtual')}
                  className="gradient-button"
                >
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Jadwalkan Meeting
                </Button>
                {activeTab === 'jakarta' && (
                  <Button
                    variant="outline"
                    onClick={handleDirections}
                    className="border-accent/30 text-accent hover:bg-accent/10"
                  >
                    <Icon name="Navigation" size={16} className="mr-2" />
                    Petunjuk Arah
                  </Button>
                )}
              </div>
            </div>

            {/* Map or Video Preview */}
            <div className="bg-muted rounded-xl overflow-hidden">
              {activeTab === 'jakarta' ? (
                <div className="w-full h-64 lg:h-full min-h-[300px]">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="Jakarta Office Location"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${currentLocation?.coordinates?.lat},${currentLocation?.coordinates?.lng}&z=15&output=embed`}
                    className="border-0"
                  />
                </div>
              ) : (
                <div className="p-8 text-center h-64 lg:h-full min-h-[300px] flex flex-col justify-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Video" size={32} className="text-accent" />
                  </div>
                  <h5 className="font-semibold text-foreground mb-2">Video Conference Ready</h5>
                  <p className="text-sm text-text-secondary mb-4">
                    Meeting virtual dengan kualitas HD dan fitur lengkap
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleScheduleMeeting('virtual')}
                    className="mx-auto"
                  >
                    <Icon name="Play" size={16} className="mr-2" />
                    Test Connection
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Nearby Landmarks (Jakarta only) */}
          {activeTab === 'jakarta' && currentLocation?.nearbyLandmarks && (
            <div className="mt-6 pt-6 border-t border-border/30">
              <h5 className="font-semibold text-foreground mb-3">Landmark Terdekat</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {currentLocation?.nearbyLandmarks?.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="MapPin" size={12} className="text-accent" />
                    <span className="text-xs text-text-secondary">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Coverage Areas */}
      <div>
        <h4 className="text-xl font-semibold text-foreground mb-4">Area Layanan</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coverageAreas?.map((coverage, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  index === 0 ? 'bg-success/20' : index === 1 ? 'bg-warning/20' : 'bg-accent/20'
                }`}>
                  <Icon 
                    name="MapPin" 
                    size={16} 
                    className={
                      index === 0 ? 'text-success' : index === 1 ? 'text-warning' : 'text-accent'
                    } 
                  />
                </div>
                <h5 className="font-semibold text-foreground">{coverage?.area}</h5>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs text-text-secondary mb-1">Wilayah:</p>
                  <div className="flex flex-wrap gap-1">
                    {coverage?.zones?.map((zone, zoneIndex) => (
                      <span 
                        key={zoneIndex}
                        className="text-xs bg-muted px-2 py-1 rounded text-foreground"
                      >
                        {zone}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Meeting:</span>
                  <span className="text-foreground">{coverage?.meetingType}</span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Respons:</span>
                  <span className="text-foreground">{coverage?.responseTime}</span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Biaya Travel:</span>
                  <span className={`font-medium ${
                    coverage?.travelFee === 'Gratis' ? 'text-success' : 'text-foreground'
                  }`}>
                    {coverage?.travelFee}
                  </span>
                </div>
              </div>

              {index === 1 && (
                <p className="text-xs text-text-secondary">
                  *In-person meeting dengan biaya transport tambahan
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Meeting Guidelines */}
      <div className="bg-gradient-to-r from-accent/10 to-brand-purple/10 border border-accent/20 rounded-xl p-6">
        <h4 className="font-semibold text-foreground mb-4">Panduan Meeting</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-foreground mb-2">Persiapan Meeting:</h5>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>• Brief singkat tentang proyek</li>
              <li>• Referensi website yang disukai</li>
              <li>• Estimasi budget dan timeline</li>
              <li>• Kontak person yang berwenang</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-foreground mb-2">Yang Akan Dibahas:</h5>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>• Analisis kebutuhan detail</li>
              <li>• Rekomendasi solusi teknis</li>
              <li>• Timeline dan milestone</li>
              <li>• Proposal harga dan kontrak</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;