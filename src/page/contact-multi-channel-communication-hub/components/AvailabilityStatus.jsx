import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isBusinessHours, setIsBusinessHours] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // Indonesian business hours (9 AM - 6 PM WIB)
      const hour = now?.getHours();
      const day = now?.getDay();
      setIsBusinessHours(day >= 1 && day <= 5 && hour >= 9 && hour < 18);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getStatusInfo = () => {
    if (isBusinessHours) {
      return {
        status: 'online',
        text: 'Sedang Online',
        description: 'Siap membantu Anda sekarang',
        responseTime: '15-30 menit',
        color: 'text-success',
        bgColor: 'bg-success/20',
        dotColor: 'bg-success'
      };
    } else {
      return {
        status: 'away',
        text: 'Di Luar Jam Kerja',
        description: 'Akan merespons pada jam kerja berikutnya',
        responseTime: '2-4 jam',
        color: 'text-warning',
        bgColor: 'bg-warning/20',
        dotColor: 'bg-warning'
      };
    }
  };

  const statusInfo = getStatusInfo();

  const workingHours = [
    { day: 'Senin - Jumat', time: '09:00 - 18:00 WIB' },
    { day: 'Sabtu', time: '09:00 - 15:00 WIB' },
    { day: 'Minggu', time: 'Libur' }
  ];

  const responseChannels = [
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      priority: 'Tercepat',
      time: '5-15 menit',
      available: isBusinessHours
    },
    {
      name: 'Email',
      icon: 'Mail',
      priority: 'Standar',
      time: '2-4 jam',
      available: true
    },
    {
      name: 'Video Call',
      icon: 'Video',
      priority: 'Terjadwal',
      time: 'Sesuai jadwal',
      available: isBusinessHours
    }
  ];

  return (
    <div className="bg-card rounded-2xl p-6 border border-border/50">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Status Ketersediaan</h3>
        <p className="text-text-secondary text-sm">
          Informasi real-time tentang ketersediaan dan waktu respons
        </p>
      </div>
      {/* Current Status */}
      <div className={`${statusInfo?.bgColor} rounded-xl p-4 mb-6`}>
        <div className="flex items-center space-x-3 mb-2">
          <div className="relative">
            <div className={`w-3 h-3 ${statusInfo?.dotColor} rounded-full`}></div>
            <div className={`absolute inset-0 w-3 h-3 ${statusInfo?.dotColor} rounded-full animate-ping opacity-75`}></div>
          </div>
          <span className={`font-semibold ${statusInfo?.color}`}>{statusInfo?.text}</span>
        </div>
        <p className="text-sm text-foreground/80 mb-2">{statusInfo?.description}</p>
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="Clock" size={14} className={statusInfo?.color} />
          <span className={statusInfo?.color}>Estimasi respons: {statusInfo?.responseTime}</span>
        </div>
      </div>
      {/* Current Time */}
      <div className="bg-muted rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-text-secondary">Waktu Jakarta (WIB)</p>
            <p className="text-lg font-semibold text-foreground">
              {currentTime?.toLocaleTimeString('id-ID', { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
              })}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-text-secondary">
              {currentTime?.toLocaleDateString('id-ID', { 
                weekday: 'long',
                day: 'numeric',
                month: 'long'
              })}
            </p>
          </div>
        </div>
      </div>
      {/* Working Hours */}
      <div className="mb-6">
        <h4 className="font-semibold text-foreground mb-3">Jam Kerja</h4>
        <div className="space-y-2">
          {workingHours?.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <span className="text-sm text-foreground">{schedule?.day}</span>
              <span className="text-sm text-text-secondary">{schedule?.time}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Response Channels */}
      <div>
        <h4 className="font-semibold text-foreground mb-3">Saluran Komunikasi</h4>
        <div className="space-y-3">
          {responseChannels?.map((channel, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  channel?.available ? 'bg-success/20' : 'bg-muted'
                }`}>
                  <Icon 
                    name={channel?.icon} 
                    size={16} 
                    className={channel?.available ? 'text-success' : 'text-text-secondary'} 
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{channel?.name}</p>
                  <p className="text-xs text-text-secondary">{channel?.priority}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-text-secondary">{channel?.time}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <div className={`w-2 h-2 rounded-full ${
                    channel?.available ? 'bg-success' : 'bg-text-secondary'
                  }`}></div>
                  <span className="text-xs text-text-secondary">
                    {channel?.available ? 'Aktif' : 'Standby'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Emergency Contact */}
      <div className="mt-6 pt-6 border-t border-border/30">
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="AlertTriangle" size={20} className="text-destructive mt-0.5" />
            <div>
              <h5 className="font-semibold text-destructive mb-1">Proyek Urgent?</h5>
              <p className="text-sm text-foreground/80 mb-2">
                Untuk proyek dengan deadline ketat, tersedia layanan express dengan respons 1-2 jam.
              </p>
              <p className="text-xs text-text-secondary">
                *Berlaku biaya tambahan 25-50% dari harga normal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStatus;