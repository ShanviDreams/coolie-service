# Product Requirements Document (PRD)

## Product Name

**Baggo – Railway Coolie Booking Platform**

---

## 1. Introduction

Baggo is a web-based platform designed to digitally connect railway passengers with licensed coolies at a railway station. The system allows passengers to pre-book coolie services before train arrival, while enabling coolies to receive and accept bookings through a dedicated dashboard. The goal is to reduce passenger stress and provide coolies with stable, organized work opportunities.

---

## 2. Problem Definition

### 2.1 Passenger-Side Problems

* Difficulty managing heavy luggage at crowded railway stations
* No guarantee of finding a coolie on arrival
* Physical strain for elderly passengers, families, and people with disabilities
* Time loss and anxiety during peak hours

### 2.2 Coolie-Side Problems

* Uncertain and irregular work opportunities
* Long idle waiting periods at stations
* Overcrowding and competition among coolies
* No advance information about passenger demand
* Inability to plan work or earnings

---

## 3. Proposed Solution

Baggo provides a structured and transparent booking system where passengers can request coolie services in advance by entering travel and luggage details. Booking requests are visible to all available coolies, and the first coolie to accept the request is assigned to the passenger. Both parties can view each other’s verified details, ensuring smooth coordination at the station.

---

## 4. Product Scope

### 4.1 MVP Scope

* Single railway station
* Multiple platforms within the station
* Passenger, Coolie, and Admin roles
* Fixed pricing based on luggage weight
* Online payment system
* Web application only

### 4.2 Out of Scope (MVP)

* GPS live tracking
* Multiple station support
* Offline booking
* Dynamic pricing

---

## 5. User Roles and Responsibilities

### 5.1 Passenger

* Register and log in
* Create a booking request
* Make online payment
* View booking status
* View assigned coolie details
* Contact coolie after confirmation

### 5.2 Coolie

* Register and get verified by admin
* Manage availability status
* View booking requests
* Accept booking requests (first-come-first-serve)
* View passenger details after confirmation

### 5.3 Admin

* Verify and approve coolie registrations
* Monitor all bookings
* Manage disputes and complaints
* Suspend or disable accounts if required

---

## 6. User Journey

### 6.1 Passenger Journey

1. Visit Baggo website
2. Sign up / log in as Passenger
3. Enter booking details (name, train number, coach number, platform number, luggage weight)
4. Confirm fixed price
5. Complete online payment
6. Wait for coolie acceptance
7. Receive booking confirmation
8. Meet assigned coolie at station

### 6.2 Coolie Journey

1. Log in to Coolie dashboard
2. Set status to Available
3. Receive booking request notification
4. Accept booking request
5. View passenger details
6. Assist passenger at station

---

## 7. Functional Requirements

### 7.1 Authentication

* Role-based login (Passenger / Coolie)
* Secure authentication

### 7.2 Passenger Dashboard

* Create new booking
* View current booking status (Pending / Confirmed)
* View coolie profile (photo, name, coolie ID, contact number)
* Message or call coolie after confirmation
* View past bookings

### 7.3 Coolie Dashboard

* Availability toggle (Available / Unavailable)
* View profile details
* View booking requests
* Accept booking requests
* View confirmed bookings

### 7.4 Admin Panel

* Coolie verification management
* Booking overview dashboard
* Complaint handling
* User account control

---

## 8. Booking Logic

* Passenger places a booking request
* Request is visible to all available coolies
* First coolie to accept gets assigned
* Booking status updates in real time
* Passenger and coolie details become visible after confirmation

---

## 9. Pricing and Payment

* Fixed pricing defined by platform
* Price based on luggage weight
* Online payment mandatory before booking confirmation

---

## 10. Edge Case Handling

* If no coolie accepts, booking remains pending and passenger is notified
* Passenger cancellation before confirmation results in full refund
* Coolie unavailability after acceptance is handled by admin reassignment

---

## 11. Non-Functional Requirements

* Clean and minimal UI
* Responsive design
* Fast performance during peak hours
* Secure data storage
* High system reliability

---

## 12. Assumptions and Constraints

### Assumptions

* Coolies are licensed and station-registered
* Coolies are familiar with station schedules
* Passengers have internet access

### Constraints

* Single-station limitation in MVP
* Manual admin verification
* Web-only platform

---

## 13. Success Metrics

* Number of completed bookings
* Passenger satisfaction rate
* Reduction in passenger waiting time
* Increase in coolie job acceptance rate

---

## 14. Future Enhancements

* Support for multiple railway stations
* Mobile application
* Train delay integration
* Rating and feedback system
* Multilingual interface

---

## 15. Conclusion

Baggo modernizes traditional railway coolie services by introducing a digital, organized, and transparent booking mechanism. The platform benefits passengers by reducing travel stress and supports coolies by providing predictable and fair work opportunities.
