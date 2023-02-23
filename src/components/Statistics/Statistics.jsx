import PropTypes from 'prop-types';
import { StatItem } from './StatItem';
import { Section, StatsHeader, StatList } from './Statistics.styled';

export const Statistics = ({ StatData, title }) => {
  return (
    <Section>
      {title && <StatsHeader>{title}</StatsHeader>}

      <StatList>
        {StatData.map(({ label, percentage, id }) => (
          <StatItem key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </Section>
  );
};

StatItem.propTypes = {
  StatData: PropTypes.arrayOf(
    PropTypes.exact({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
