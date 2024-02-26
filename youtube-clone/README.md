# Getting Started with Youtube App

- Header
- SideBar
- MainContainer
- Redux
- Debouncing:
    - typig slow = 200ms
    - typing fast = 30ms

    ...
    Performance:
    - iphone pro max = 14 letter*1000 = 14000
    - with debouncing = 3Api calls * 1000 = 3000


- debouncing with 200ms
 - if difference b/w 2 key strokes is <200ms - Decline APi call
  - > 200 ms make an api call


- Cache:
    time complexity to search in array = O(n)
    time complexity to search in Object = O(1)
    - [i,ip,iph,iphone]
    - {
        i:
        ip:
        iph:
        iphone:
    }
    - new Map();

--- Search feature using for optimisation
- Live API
- Debouncing
- Caching

- N-level nesting comments

- Live Chat >>>>>> Infinite scroll >>>> Pagination


------- CHallenges in LIve Chat
--get live data - Data Layer
-- update the UI - Ui Layer

- Data(Live)
    - Web Sockets - Bidirection Live Data(No regular interval)
        - (Zerodha,Any Stock App,Whatsapp)
    - Long Polling (Api Polling) - onedirection (Interval) 
        - (Gmail , Cricbuzz,Youtube)

- UI 