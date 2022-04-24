export interface MyEvent {
  user_id: number,
  event_id: number,
  status: string,
  event: {
    id: number,
    name: string,
    location: string,
    description: string,
    date: Date,
    duration: number
  }
}
