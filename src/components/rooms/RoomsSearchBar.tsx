import { useBooking } from "../../context/BookingContext";
import StaySearchForm from "./StaySearchForm";

export default function RoomsSearchBar() {
  const booking = useBooking();

  return (
    <div className="rounded-none border border-line bg-cream p-5 shadow-sm sm:p-6">
      <StaySearchForm
        idPrefix="rooms-search"
        initial={{
          checkIn: booking.checkIn,
          checkOut: booking.checkOut,
          guests: booking.guests,
        }}
        submitLabel="Update Search"
        onSubmit={(values) =>
          booking.setSearch(values.checkIn, values.checkOut, values.guests)
        }
      />
    </div>
  );
}
