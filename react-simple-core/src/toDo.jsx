// export default function ToDo({ task, status }) {
//   if (status) {
//     return <li>{task} is done</li>;
//   } else {
//     return <li>{task} is Pending</li>;
//   }
// }

// export default function ToDo({ task, status }) {
//   return status && <li> {task} is done</li>;
// }


// export default function ToDo({ task, status }) {
//   return status || <li> {task} is not done</li>;
// }

export default function ToDo({ task, status }) {
  let work;
  if (status) {
    work = <li>{task} is done</li>;
  } else {
    work = <li>{task} is Pending</li>;
  }
  return work;
}