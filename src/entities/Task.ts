class Task {
  readonly id: number;
  readonly date?: Date;
  name: string;
  isDone: boolean;
  project: string;

  constructor(props: Omit<Task, 'id' | 'isDone'>) {
    Object.assign(this, props);
    this.isDone = false;
    if (!props.date) {
      this.date = new Date();
    }
  }
}

export default Task;
