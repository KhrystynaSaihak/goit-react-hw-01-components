import PropTypes from 'prop-types';
import { StatsPercentage, StatListItem, StatsLabel } from './Statistics.styled';

function getRandomHexColor() {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return color;
}

export const StatItem = ({ label, percentage }) => {
  return (
    <StatListItem backgroundcolor={getRandomHexColor()}>
      <StatsLabel>{label}</StatsLabel>
      <StatsPercentage>{percentage}</StatsPercentage>
    </StatListItem>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
