import React from 'react';

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
}

export interface StatProps {
  value: string;
  label: string;
}