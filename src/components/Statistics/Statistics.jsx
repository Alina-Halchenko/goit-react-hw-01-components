import PropTypes from 'prop-types';
import { StatList } from './StatList';
import {StatSection, StatTitle, StatListUl, StatItemLi} from './Statistics.styled'


export const Statistics = ({title = null, data}) => {
  return (
    <StatSection>
    {title && <StatTitle>{title}</StatTitle>}
        <StatListUl>
          {data.map(dataItem => (
            <StatItemLi key={dataItem.id}>
              <StatList dataItem={dataItem} />
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
    })
  ).isRequired,
};