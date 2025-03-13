import { useState } from 'react';
import { Position } from '../types/position';

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [position, setPosition] = useState<Position>({
    latitude: 0,
    longitude: 0,
  });

  async function getCurrentLocation(): Promise<void> {
    return new Promise((resolve, reject) => {
      setIsLoading(true);

      if (!navigator.geolocation) {
        setIsLoading(false);
        reject('Your browser does not support geolocation');
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setIsLoading(false);
          setPosition({ latitude, longitude });
          resolve();
        },
        (error) => {
          setIsLoading(false);
          reject(error.message);
        }
      );
    });
  }

  return { getCurrentLocation, position, isLoading };
}
