// Cloned from w3schools.com

export class DomTableSorter {
  table : any;
  constructor(tableName : string) {
    this.table = document.getElementById(tableName);
  }

  sort(n: number) : void {
    let switchcount = 0;
    let switching = true;
    let shouldSwitch = false;
    // Set the sorting direction to ascending:
    var dir = "asc";
    /* Make a loop that will continue until no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      let rows = this.table.rows;
      /* Loop through all table rows (except the first, which contains table headers): */
      let i: number;
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;

        /* Get the two elements you want to compare, one from current row and one from the next: */
        let x = rows[i].getElementsByTagName("TD")[n];
        let y = rows[i + 1].getElementsByTagName("TD")[n];

        /* Check if the two rows should switch place,  based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
        else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount++;
      }
      else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
}
