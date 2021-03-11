import { renderToString } from 'react-dom/server';
import { Box, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { euroTooltipFormatter, percentageFormatter } from 'utils/formatter';
const useStyles = makeStyles((theme) => ({
  root: {},
  value: {
    fontWeight: 'bold',
    fontSize: '24px',
  },
  titleSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  breakdownSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  breakdown: {
    padding: '0 10px',
  },
}));

const SociodemographicsTooltip = ({ feature }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.titleSection}>
        <Typography className={classes.value}>
          EUR {euroTooltipFormatter(feature.properties.wvce_08).value}
        </Typography>
        <Typography variant='subtitle2'>
          Consumer Spend on Communications (Mn Euro)
        </Typography>
      </Box>
      <Divider />
      <Box className={classes.breakdownSection}>
        <Box>
          <Typography className={classes.breakdown} variant='subtitle2'>
            Cons. Segment
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.breakdown} variant='subtitle2'>
            {feature.properties.wvseg}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.breakdownSection}>
        <Box>
          <Typography className={classes.breakdown} variant='subtitle2'>
            Purchasing Power
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.breakdown} variant='subtitle2'>
            {percentageFormatter(feature.properties.di_mio / 100, 0).value} %
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
const renderSociodemographicsTooltip = (feature) =>
  renderToString(<SociodemographicsTooltip feature={feature} />);

export default renderSociodemographicsTooltip;