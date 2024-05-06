import React from 'react';

import { Typography, Tooltip } from '@material-ui/core';
import { HelpOutlineOutlined as HelpIcon } from '@material-ui/icons';

import Currency from './Currency';
import { headerInformation as tooltipTitle } from '../util/constants';

import useStyles from '../assets/jss/components/Header';

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography
          variant="h4"
          color="primary"
          className={classes.title}
        >
          Upto
          <Currency amount={props.eligibleLoanAmount} padWithSpaces />
        </Typography>

        <Typography
          variant="overline"
          className={classes.subtitle}
        >
          Eligible Loan Amount
        </Typography>
      </div>

      <div className={classes.iconContainer}>
        <Tooltip
          title={tooltipTitle}
          placement="bottom-end"
        >
          <HelpIcon color="secondary" />
        </Tooltip>
      </div>
    </div>
  );
}

export default Header;
