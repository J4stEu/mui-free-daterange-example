import React, {FC} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

interface DateRangeProps {
  lc: ILocale | undefined 
}

function checkRange(date1: Dayjs | null, date2: Dayjs | null): boolean {
  if ((date1 === null) || (date2 === null)) return false
  if (date2 > date1) return true
  return false
}

function result(date1: Dayjs | null, date2: Dayjs | null) {
  alert(checkRange(date1, date2))
}

const DateRange: FC<DateRangeProps> = ({
 lc
}) => {
  const date = dayjs();
  const [fromValue, setFromValue] = React.useState<Dayjs | null>(date);
  const [toValue, setToValue] = React.useState<Dayjs | null>(date.add(1, 'day'));
  console.log(lc)
  return (
    <div style={{height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={lc}>
        <DatePicker
          label="Start date"
          openTo="year"
          views={['year', 'month', 'day']}
          value={fromValue}
          onChange={(newValue) => {
            setFromValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="End date"
          openTo="year"
          views={['year', 'month', 'day']}
          value={toValue}
          onChange={(newValue) => {
            setToValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <div>
        <span>Range: </span>
        <span>{`${fromValue?.format('DD.MM.YYYY')} - ${toValue?.format('DD.MM.YYYY')}`}</span>
      </div>
      <button onClick={() => result(fromValue, toValue)}>Submit</button>
    </div>
  );
};

export default DateRange;
