/* eslint-disable prettier/prettier */
import { JSONClient } from 'google-auth-library/build/src/auth/googleauth';
import { OAuth2Client } from 'google-auth-library';

export interface IbodyAvailabilityService {
  auth: JSONClient | OAuth2Client;
  body: IReqBodyEvents;
}

export interface IReqBodyEvents {
  max: string;
  min: string;
}

export interface IRooms {
  "name-en": string;
  "name-es": string;
  "name-fr": string;
  num: number | string;
  'max-persons': number;
  "description-en": string;
  "description-es": string;
  "description-fr": string;
  "bed-L": {
    count: number;
    mezanine: boolean;
    "private-room": boolean;
  };
  "bed-S": number;
  "bathroom-private": boolean;
  "terrace-dnd-hammock": boolean;
  "mini-refrigerator": boolean;
  "air-Conditioner"?: boolean;
  fan: boolean;
  price: {
    jan: {
      high: {
        startDay: number;
        endDay: number;
        $: number;
      };
      low: {
        $: number;
      };
    };
    fed: number;
    mar: number;
    apr: {
      high: {
        startDay: number;
        endDay: number;
        $: number;
      };
      low: {
        $: number;
      };
    };
    may: number;
    jun: number;
    jul: number;
    agust: number;
    sep: number;
    oct: number;
    nov: number;
    dec: {
      high: {
        startDay: number;
        endDay: number;
        $: number;
      };
      low: {
        $: number;
      };
    };
  };
}
