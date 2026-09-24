import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import { addDays, generateReference, toISODate } from "../lib/booking";

export interface GuestDetails {
  name: string;
  email: string;
  phone: string;
  requests: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomSlug: string | null;
  rateId: string | null;
  reference: string | null;
  guest: GuestDetails;
}

const emptyGuest: GuestDetails = {
  name: "",
  email: "",
  phone: "",
  requests: "",
};

function initialDates() {
  const today = new Date();
  return {
    checkIn: toISODate(addDays(today, 14)),
    checkOut: toISODate(addDays(today, 17)),
  };
}

interface BookingContextValue extends BookingState {
  setSearch: (checkIn: string, checkOut: string, guests: number) => void;
  selectRoom: (roomSlug: string, rateId: string) => void;
  setGuest: (guest: GuestDetails) => void;
  confirmBooking: () => string;
  reset: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BookingState>(() => ({
    ...initialDates(),
    guests: 2,
    roomSlug: null,
    rateId: null,
    reference: null,
    guest: emptyGuest,
  }));

  const setSearch = useCallback(
    (checkIn: string, checkOut: string, guests: number) => {
      setState((prev) => ({ ...prev, checkIn, checkOut, guests }));
    },
    [],
  );

  const selectRoom = useCallback((roomSlug: string, rateId: string) => {
    setState((prev) => ({ ...prev, roomSlug, rateId, reference: null }));
  }, []);

  const setGuest = useCallback((guest: GuestDetails) => {
    setState((prev) => ({ ...prev, guest }));
  }, []);

  const confirmBooking = useCallback(() => {
    const reference = generateReference();
    setState((prev) => ({ ...prev, reference }));
    return reference;
  }, []);

  const reset = useCallback(() => {
    setState({
      ...initialDates(),
      guests: 2,
      roomSlug: null,
      rateId: null,
      reference: null,
      guest: emptyGuest,
    });
  }, []);

  const value = useMemo(
    () => ({ ...state, setSearch, selectRoom, setGuest, confirmBooking, reset }),
    [state, setSearch, selectRoom, setGuest, confirmBooking, reset],
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return ctx;
}
