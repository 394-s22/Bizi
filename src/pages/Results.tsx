import { BusinessList } from '../components/BusinessList';
import { BusinessEntry } from '../types/BusinessTypes';

type ResultsProps = {
  businessList: BusinessEntry[];
};

export const Results = ({ businessList }: ResultsProps) => {
  return businessList.length > 0 ? (
    <BusinessList businessList={businessList} />
  ) : (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '90vh',
      }}
    >
      <p style={{ color: 'grey', fontSize: 'large' }}>No results found . . .</p>
    </div>
  );
};
