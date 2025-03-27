import { ClientJS } from 'clientjs';
import { useEffect, useState } from 'react';

const useDeviceFingerprint = () => {
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    const client = new ClientJS();

    setDeviceInfo({
      fingerprint: client.getFingerprint(),
      userAgent: client.getUserAgent(),
      browser: client.getBrowser(),
      browserVersion: client.getBrowserVersion(),
      os: client.getOS(),
      device: client.getDevice(),
      screenResolution: client.getScreenPrint(),
      language: client.getLanguage(),
    });
  }, []);

  return deviceInfo;
};

export default useDeviceFingerprint;
