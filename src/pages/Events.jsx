import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import API from "../api";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

function Events() {
  const [events, setEvents] = useState([]); 
  const [loading, setLoading] = useState(true);

  const getAllEvents = async () => {
    try {
      const response = await API.get("/v2/events");
      console.log("EVENT API RESPONSE:", response.data);

      if (response.data.result === true && Array.isArray(response.data.data)) {
        setEvents(response.data.data);
      } else {
        setEvents([]); 
      }
    } catch (error) {
      console.log("Error fetching events:", error);
      setEvents([]); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div className="w-full bg-[#f8f8f8] min-h-[40vh]">
      <section className="py-16 px-5 md:px-10 lg:px-20 xl:px-32 max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#071c44]">
            Upcoming Events
          </h2>
        </div>

        {loading ? (
          <div className="w-full py-20 flex items-center justify-center text-xl font-semibold text-gray-500">
            Loading Events List...
          </div>
        ) : Array.isArray(events) && events.length > 0 ? (
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-3xl overflow-hidden shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div>
                  <img src={event.eventImage} alt={event.title} className="w-full h-[220px] object-cover" />
                  <div className="p-6">
                    <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#071c44] mt-4 line-clamp-2">{event.title}</h3>
                    <div className="mt-4 space-y-2 text-gray-500 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarDays size={16} className="text-red-500" />
                        <span>{event.eventdate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-red-500" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VIEW DETAILS BUTTON PATH UPDATE */}
                <div className="p-6 pt-0">
                  <Link 
                    to={`/event-details/${event.id}`} // FIX: Matches App.jsx path perfectly
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white rounded-xl py-3 font-medium transition-all duration-300"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        ) : (

          /* IF NO EVENTS FOUND DISPLAY BANNER */
          <div className="w-full py-16 bg-white border border-gray-200 rounded-3xl text-center shadow-sm">
            <CalendarDays className="text-gray-300 mx-auto mb-4" size={56} />
            <h3 className="text-2xl font-bold text-[#071c44]">No Events Found</h3>
            <p className="text-gray-500 mt-2 max-w-sm mx-auto px-4">
              Right now there are no active or upcoming events scheduled. Please check back later!
            </p>
          </div>

        )}
      </section>
    </div>
  );
}

export default Events;