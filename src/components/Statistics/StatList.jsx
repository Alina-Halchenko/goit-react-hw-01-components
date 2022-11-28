import PropTypes from 'prop-types';
import { Fragment } from "react";
import {UserLabel, UsePpercentage} from './Statistics.styled'


export const StatList = ({ dataItem:{label, percentage} }) => {
  return (
    <Fragment>
    <UserLabel>{label}</UserLabel>
    <UsePpercentage>{percentage}%</UsePpercentage>
    </Fragment>
  );
};


StatList.propTypes = {
  dataItem:
    PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired
};
