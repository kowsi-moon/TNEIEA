import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api";
import { CalendarDays, MapPin, ArrowLeft, Bookmark } from "lucide-react";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // DYNAMIC CALENDAR STATE
  const [currentDate, setCurrentDate] = useState(null);


  const parseBackendDate = (dateStr) => {
    if (!dateStr) return null;

    const parts = dateStr.split(/[-/]/);
    if (parts.length === 3) {
   
      if (parts[0].length === 4) {
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; 
        const day = parseInt(parts[2], 10);
        return new Date(year, month, day);
      } else {
       
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
      }
    }

    let d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return d;
    }
    return null;
  };

  const getEventDetails = async () => {
    try {
      setLoading(true);
      const response = await API.get("/v2/events");
      
      if (response.data.result === true && Array.isArray(response.data.data)) {
        setAllEvents(response.data.data);
        
        // Find current active event
        const singleEvent = response.data.data.find(
          (item) => item.id.toString() === id.toString()
        );
        setEvent(singleEvent || null);

        // Dynamic calendar movement trigger
        if (singleEvent && singleEvent.eventdate) {
          const parsedDate = parseBackendDate(singleEvent.eventdate);
          if (parsedDate) {
            setCurrentDate(parsedDate);
          }
        } else {
          setCurrentDate(new Date());
        }
      } else {
        setEvent(null);
        setCurrentDate(new Date());
      }
    } catch (error) {
      console.log("Error inside EventDetails:", error);
      setEvent(null);
      setCurrentDate(new Date());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEventDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center text-xl font-semibold text-gray-500 bg-[#f4f6fa]">
        Loading Event Details View...
      </div>
    );
  }

  if (!event) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-[#f4f6fa] px-5 py-16">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md border border-gray-100">
          <CalendarDays className="text-red-500 mx-auto mb-4" size={56} />
          <h2 className="text-3xl font-bold text-[#071c44] mb-2">No Events Found</h2>
          <p className="text-gray-500 leading-relaxed">
            The event you are looking for has either finished, expired, or does not exist anymore.
          </p>
          <Link to="/events" className="mt-6 inline-flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-red-600 transition-all">
            <ArrowLeft size={16} /> Back to Events
          </Link>
        </div>
      </div>
    );
  }

  // ================= REAL CALENDAR GENERATION MATHEMATICS LAYER =================
  const activeCalendarDate = currentDate || new Date();
  const year = activeCalendarDate.getFullYear();
  const month = activeCalendarDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Grid adjustment to start row on Monday
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; 

  // Get total days in target month
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };


  const isSelectedEventDate = (dayNumber) => {
    if (!event || !event.eventdate) return false;
    const targetDate = parseBackendDate(event.eventdate);
    return (
      targetDate &&
      targetDate.getDate() === dayNumber &&
      targetDate.getMonth() === month &&
      targetDate.getFullYear() === year
    );
  };

  // 2. DYNAMIC CHECKER: Highlights for other events
  const hasEventOnDay = (dayNumber) => {
    return allEvents.some((evt) => {
      if (!evt.eventdate || evt.id.toString() === id.toString()) return false;
      const d = parseBackendDate(evt.eventdate);
      return (
        d &&
        d.getDate() === dayNumber &&
        d.getMonth() === month &&
        d.getFullYear() === year
      );
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#f4f6fa] font-sans text-[#111827] pb-16">
      
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* ================= LEFT COLUMN: CALENDAR ================= */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xl text-gray-900">
                {monthNames[month]} <span className="text-gray-400 font-normal">{year}</span>
              </h3>
              <div className="flex gap-2 bg-gray-50 p-1 rounded-xl border border-gray-100">
                <button 
                  onClick={handlePrevMonth} 
                  className="p-2 hover:bg-gray-100 rounded-lg transition-all text-gray-600 font-bold text-sm"
                >
                  &lt;
                </button>
                <button 
                  onClick={handleNextMonth} 
                  className="p-2 hover:bg-gray-100 rounded-lg transition-all text-gray-600 font-bold text-sm"
                >
                  &gt;
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-gray-400 mb-3 tracking-wider">
              <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
            </div>

            <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center text-sm font-medium">
              
              {Array.from({ length: startOffset }).map((_, index) => (
                <span key={`empty-${index}`} className="p-2 text-transparent select-none">0</span>
              ))}

              {Array.from({ length: totalDaysInMonth }).map((_, index) => {
                const dayNumber = index + 1;
                const isSelected = isSelectedEventDate(dayNumber);
                const hasEventActive = hasEventOnDay(dayNumber);

                let dayStyles = "text-gray-700 hover:bg-gray-100 cursor-pointer"; 

                if (isSelected) {
                  dayStyles = "bg-red-500 text-white font-bold shadow-md shadow-red-200 scale-105";
                } else if (hasEventActive) {
                  dayStyles = "bg-red-50 text-red-600 border border-red-200 font-bold hover:bg-red-100 cursor-pointer";
                }

                return (
                  <div key={`day-${dayNumber}`} className="relative flex items-center justify-center">
                    <span 
                      className={`w-9 h-9 flex items-center justify-center rounded-full text-center transition-all duration-200 select-none text-xs sm:text-sm font-semibold ${dayStyles}`}
                    >
                      {dayNumber}
                    </span>
                  </div>
                );
              })}

            </div>
          </div>

          <Link to="/events" className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-2xl py-3.5 font-medium transition-all shadow-sm text-sm">
            <ArrowLeft size={16} /> Return to All Events
          </Link>

        </div>

        {/* ================= RIGHT COLUMN: EVENT DETAILS ================= */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
              Schedule Details <span className="text-gray-400 font-normal text-sm sm:text-lg">| {event.eventdate}</span>
            </h2>
            <button className="flex items-center gap-1.5 text-xs font-semibold bg-white border border-gray-200 px-3 py-1.5 rounded-xl shadow-sm text-gray-600">
              <Bookmark size={14} className="text-red-500" /> Active
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-6">
            
            <div className="md:col-span-5 rounded-2xl overflow-hidden h-[240px] md:h-full relative group min-h-[220px]">
              <img 
                src={event.eventImage} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm text-red-500">
                {event.category || "Event"}
              </span>
            </div>

            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold text-red-500 tracking-wider uppercase block">{event.category}</span>
                <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1 leading-snug">{event.title}</h1>
                
                <div 
                  className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-4 border-t border-gray-100 pt-3 prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                />
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-gray-600 border border-gray-100">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-red-500" />
                  <span>{event.eventdate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-red-500" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h3 className="font-extrabold text-lg text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Complete Event Overview
            </h3>
            <div 
              className="text-gray-600 text-sm leading-relaxed prose max-w-none whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />
          </div>

        </div>

      </main>
    </div>
  );
}

export default EventDetails;