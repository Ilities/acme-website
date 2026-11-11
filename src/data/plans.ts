export interface Plan {
  id: string;
  name: string;
  /** Monthly price in euros, VAT 0% */
  monthlyPrice: number;
  /** Annual price expressed as euros per month, VAT 0% */
  annualMonthlyPrice: number;
  /** Total annual price in euros, VAT 0% */
  annualTotal: number;
  summary: string;
  staff: string;
  locations: string;
  smsPerMonth: number;
  features: string[];
  highlighted?: boolean;
}

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 22,
    annualMonthlyPrice: 19,
    annualTotal: 228,
    summary: 'For a single practitioner taking bookings online.',
    staff: '1 staff calendar',
    locations: '1 location',
    smsPerMonth: 50,
    features: [
      'Online booking page',
      'Email confirmations and reminders',
      'Customer records',
      'Google and Outlook calendar sync',
      'Email support',
    ],
  },
  {
    id: 'clinic',
    name: 'Clinic',
    monthlyPrice: 59,
    annualMonthlyPrice: 49,
    annualTotal: 588,
    summary: 'For clinics and studios with a small team.',
    staff: 'Up to 10 staff calendars',
    locations: '2 locations',
    smsPerMonth: 400,
    highlighted: true,
    features: [
      'Everything in Starter',
      'SMS reminders',
      'Online payments and deposits',
      'Class and group bookings',
      'Waiting list',
      'Reports and exports',
      'Email and chat support',
    ],
  },
  {
    id: 'group',
    name: 'Group',
    monthlyPrice: 119,
    annualMonthlyPrice: 99,
    annualTotal: 1188,
    summary: 'For businesses with several locations.',
    staff: 'Unlimited staff calendars',
    locations: 'Up to 5 locations',
    smsPerMonth: 1500,
    features: [
      'Everything in Clinic',
      'Multiple locations',
      'Roles and permissions',
      'Shared customer records across locations',
      'API access',
      'Phone support and a named contact',
    ],
  },
];

export const comparisonRows: { label: string; values: Record<string, string | boolean> }[] = [
  { label: 'Staff calendars', values: { starter: '1', clinic: 'Up to 10', group: 'Unlimited' } },
  { label: 'Locations', values: { starter: '1', clinic: '2', group: 'Up to 5' } },
  { label: 'SMS included per month', values: { starter: '50', clinic: '400', group: '1,500' } },
  { label: 'Online booking page', values: { starter: true, clinic: true, group: true } },
  { label: 'Email reminders', values: { starter: true, clinic: true, group: true } },
  { label: 'Calendar sync', values: { starter: true, clinic: true, group: true } },
  { label: 'SMS reminders', values: { starter: false, clinic: true, group: true } },
  { label: 'Online payments and deposits', values: { starter: false, clinic: true, group: true } },
  { label: 'Class and group bookings', values: { starter: false, clinic: true, group: true } },
  { label: 'Waiting list', values: { starter: false, clinic: true, group: true } },
  { label: 'Reports and exports', values: { starter: false, clinic: true, group: true } },
  { label: 'Roles and permissions', values: { starter: false, clinic: false, group: true } },
  { label: 'API access', values: { starter: false, clinic: false, group: true } },
  { label: 'Support', values: { starter: 'Email', clinic: 'Email and chat', group: 'Phone and named contact' } },
];

export function formatPrice(price: number): string {
  return `€${price.toLocaleString('en-GB')}`;
}
