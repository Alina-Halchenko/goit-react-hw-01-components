import PropTypes from 'prop-types';
import {StatSection, StatTitle, StatListUl, StatItemLi, UserLabel, UsePpercentage} from './Statistics.styled'


export const Statistics = ({title, data}) => {
  return (
    <StatSection>
    {title && <StatTitle>{title}</StatTitle>}
        <StatListUl>
          {data.map(dataItem => (
            <StatItemLi key={dataItem.id}>
              <UserLabel>{dataItem.label}</UserLabel>
              <UsePpercentage>{dataItem.percentage}%</UsePpercentage>
              </StatItemLi>
          ))}
        </StatListUl>
    </StatSection>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};