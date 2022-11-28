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

