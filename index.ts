import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

// BehaviorSubjects are useful for representing "values over time". For instance, an event stream of birthdays is a Subject, but the stream of a person's age would be a BehaviorSubject.
//problem

// const subject = new Subject();
// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v),
// });
// subject.next(1);
// subject.next(2);
// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v),
// });
// subject.next(3);

// const subject = new BehaviorSubject(0); // 0 is the initial value
// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v),
// });

// subject.next(1);
// subject.next(2);

// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v),
// });
// subject.next(3);

// A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers.

// const subject = new ReplaySubject(3); // buffer 3 values for new subscribers
// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);
// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });
// subject.next(5);

// window time
// const subject = new ReplaySubject(100, 500 /* windowTime */);
// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// let i = 1;
// const id = setInterval(() => subject.next(i++), 200);
// setTimeout(() => {
//   subject.subscribe({
//     next: (v) => console.log('observerB: ' + v)
//   });
// }, 1000);
// setTimeout(() => {
//   subject.complete();
//   clearInterval(id);
// }, 2000);

// The AsyncSubject is a variant where only the last value of the Observable execution is sent to its observers, and only when the execution completes.
// The AsyncSubject is similar to the last() operator, in that it waits for the complete notification in order to deliver a single value.
// The AsyncSubject looks like promise

// const subject = new AsyncSubject();
// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v),
// });
// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);
// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v),
// });

// subject.next(5);
// subject.complete();
