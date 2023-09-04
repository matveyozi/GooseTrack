import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addMonths, subMonths, addDays, subDays } from 'date-fns';

// import { useLocation } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import {
  PeriodPaginatorContainer,
  ButtonsContainer,
  SwitcherContainer,
  SwitcherPart,
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ selectedPeriodType, onDateChange }) => {
  const [activeSwitcher, setActiveSwitcher] = useState(0);

  // const dateFormat = selectedPeriodType === 'month' ? 'MMM yyyy' : 'd MMM yyyy';

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSwitcherClick = (direction) => {
    const newDate = selectedPeriodType === 'month'
      ? (direction === 'previous'
        ? subMonths(selectedDate, 1)
        : addMonths(selectedDate, 1))
      : (direction === 'previous'
        ? subDays(selectedDate, 1)
        : addDays(selectedDate, 1));

    setSelectedDate(newDate);
    onDateChange(newDate);
  };

  return (
    <PeriodPaginatorContainer>
      <ButtonsContainer>
        <DatePicker
          id="datePickerInput"
          selected={selectedDate} // Використовуємо значення selectedDate
          onChange={date => {
            setSelectedDate(date); // Змінюємо значення selectedDate при виборі дати
            onDateChange(date); // Викликаємо обробник зміни дати
          }}
          dateFormat={
            selectedPeriodType === 'month' ? 'MMMM yyyy' : 'd MMM yyyy'
          }
        />
        <SwitcherContainer>
          <SwitcherPart
            active={activeSwitcher === 0}
            onClick={() => {
              setActiveSwitcher(0);
              handleSwitcherClick('previous');
            }}
          >
            ❮
          </SwitcherPart>
          <SwitcherPart
            active={activeSwitcher === 1}
            onClick={() => {
              setActiveSwitcher(1);
              handleSwitcherClick('next');
            }}
          >
            ❯
          </SwitcherPart>
        </SwitcherContainer>
      </ButtonsContainer>
    </PeriodPaginatorContainer>
  );
};

export default PeriodPaginator;
