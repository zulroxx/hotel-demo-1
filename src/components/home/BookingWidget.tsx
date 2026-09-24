import { useNavigate } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";
import StaySearchForm from "../rooms/StaySearchForm";

/** Floating availability card that overlaps the hero. */
export default function BookingWidget() {
  const booking = useBooking();
  const navigate = useNavigate();

  return (
    <div className="rounded-none border border-line bg-cream/95 p-6 shadow-2xl shadow-ink/10 sm:p-7">
      <StaySearchForm
        idPrefix="widget"
        initial={{
          checkIn: booking.checkIn,
          checkOut: booking.checkOut,
          guests: booking.guests,
        }}
        submitLabel="Check Availability"
        onSubmit={(values) => {
          booking.setSearch(values.checkIn, values.checkOut, values.guests);
          navigate("/rooms");
        }}
      />
    </div>
  );
}
