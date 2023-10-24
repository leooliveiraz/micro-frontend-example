import React, { useEffect } from "react";

function Users() {
  useEffect(() => {
    localStorage.setItem("app1", "abri");
    console.log('lá vem ela')
  }, []);

  const listaPessoas = [
    { name: "Robyn Harris", email: "grace.metz@waters.com", idade: 2 },
    {
      name: "Mr. Wilfrid Franecki Jr.",
      email: "felton.mohr@fahey.com",
      idade: 9,
    },
    { name: "Marilie Block", email: "schimmel.carey@gmail.com", idade: 7 },
    { name: "Athena Heathcote V", email: "spinka.eladio@yahoo.com", idade: 2 },
    { name: "Prof. Ellen Kshlerin", email: "veum.deondre@yahoo.com", idade: 1 },
    { name: "Tremayne McKenzie", email: "kay02@gmail.com", idade: 6 },
    { name: "Royce Quigley", email: "jazlyn63@schmeler.com", idade: 8 },
    { name: "Dr. Kieran McGlynn", email: "pansy.mayer@bayer.org", idade: 3 },
    { name: "Prof. Jackie Stiedemann", email: "korey14@hotmail.com", idade: 7 },
    {
      name: "Dr. Raven Schroeder I",
      email: "dannie60@williamson.com",
      idade: 9,
    },
    { name: "Ryan Hodkiewicz", email: "jaquelin91@windler.com", idade: 0 },
    { name: "Sylvan Kiehn", email: "rhiannon28@yahoo.com", idade: 2 },
    { name: "Prof. Jailyn Gerlach MD", email: "sarina61@yahoo.com", idade: 2 },
    { name: "Mrs. Ava Metz Jr.", email: "ferry.alexie@hotmail.com", idade: 4 },
    { name: "Miss Adela Upton", email: "ywuckert@gmail.com", idade: 8 },
    { name: "Myrtie Barton", email: "gerlach.kirk@stark.com", idade: 2 },
    { name: "Dr. Asa Kautzer I", email: "madalyn50@gmail.com", idade: 6 },
    { name: "Brionna Ward", email: "jesse93@crooks.org", idade: 2 },
    {
      name: "Hilario Hirthe MD",
      email: "gulgowski.freddie@moen.com",
      idade: 5,
    },
    { name: "Frances Bayer", email: "leannon.bridie@green.net", idade: 9 },
    { name: "Sincere Williamson", email: "tommie.bruen@reinger.biz", idade: 0 },
    { name: "Dorian Reichel", email: "yledner@hotmail.com", idade: 3 },
    {
      name: "Miss Gertrude Batz",
      email: "nicolas.princess@gmail.com",
      idade: 1,
    },
    {
      name: "Walton Kshlerin IV",
      email: "aleen.jenkins@harris.info",
      idade: 4,
    },
    { name: "Jadyn Hills DDS", email: "americo73@yahoo.com", idade: 3 },
    { name: "Paula West", email: "daphney08@littel.com", idade: 2 },
    { name: "Avis Ondricka", email: "lschultz@yahoo.com", idade: 9 },
    { name: "Theron Runolfsdottir", email: "christop23@kovacek.com", idade: 5 },
    {
      name: "Miss Deanna Anderson I",
      email: "naltenwerth@hotmail.com",
      idade: 1,
    },
    { name: "Pattie Hand Jr.", email: "ignacio.okuneva@yahoo.com", idade: 7 },
    { name: "Prof. Urban Witting MD", email: "kluettgen@gmail.com", idade: 5 },
    { name: "Nettie Ziemann", email: "maegan93@wuckert.org", idade: 5 },
    { name: "Wilson Flatley", email: "arnold.cremin@hotmail.com", idade: 3 },
    { name: "Brenna Hyatt", email: "faltenwerth@pouros.biz", idade: 9 },
    {
      name: "Walter Beahan PhD",
      email: "abagail.gusikowski@ryan.net",
      idade: 9,
    },
    {
      name: "Dr. Monserrat Walsh DDS",
      email: "susana33@hotmail.com",
      idade: 0,
    },
    { name: "Donna Kshlerin", email: "goyette.cydney@hyatt.com", idade: 2 },
    {
      name: "Prof. Gerald Gusikowski V",
      email: "pietro36@schultz.biz",
      idade: 7,
    },
    { name: "Gladyce Doyle", email: "turner.mcglynn@rogahn.com", idade: 8 },
    { name: "Lamar Murazik", email: "madison.dicki@keeling.org", idade: 0 },
    { name: "Maci Wehner", email: "ahmed.runolfsson@gmail.com", idade: 9 },
    { name: "Tracey Weimann Jr.", email: "mason84@connelly.com", idade: 5 },
    { name: "Humberto Purdy", email: "patricia.towne@kiehn.com", idade: 9 },
    { name: "Prof. Rashad Miller PhD", email: "ldietrich@yahoo.com", idade: 5 },
    { name: "Dangelo Reynolds", email: "minerva21@gleichner.info", idade: 5 },
    { name: "Rodolfo Keebler Jr.", email: "ubruen@yahoo.com", idade: 1 },
    { name: "Douglas Morar Sr.", email: "osinski.erica@brakus.org", idade: 9 },
    { name: "Prof. Queen Hoppe", email: "orn.romaine@jerde.com", idade: 0 },
    {
      name: "Myrtis Kris",
      email: "noemie.runolfsdottir@gottlieb.info",
      idade: 7,
    },
    { name: "Olen McCullough", email: "hammes.dovie@gmail.com", idade: 7 },
    { name: "Darren Rolfson III", email: "stanford96@yahoo.com", idade: 8 },
    { name: "Dr. Brant Kub Sr.", email: "juvenal35@gmail.com", idade: 0 },
    {
      name: "Miss Hillary Quitzon",
      email: "oconnell.marques@gmail.com",
      idade: 3,
    },
    { name: "Prof. Zora Rodriguez V", email: "eturcotte@gmail.com", idade: 0 },
    { name: "Keyon Renner", email: "yharris@yahoo.com", idade: 6 },
    { name: "Luigi Hodkiewicz", email: "gchamplin@yahoo.com", idade: 4 },
    { name: "Maybelle Corwin", email: "ycole@yahoo.com", idade: 6 },
    { name: "Prof. Janet Ernser", email: "goodwin.howard@kozey.com", idade: 7 },
    { name: "Joshua Reilly", email: "amoen@hotmail.com", idade: 8 },
    {
      name: "Prof. Dustin Larkin",
      email: "santiago.mckenzie@hotmail.com",
      idade: 0,
    },
    { name: "Freeda Lehner DDS", email: "erik.haag@yahoo.com", idade: 3 },
    { name: "Mr. Armand Collier", email: "yhodkiewicz@kunze.com", idade: 1 },
    { name: "Ms. Delores Ullrich II", email: "gokon@lehner.org", idade: 8 },
    { name: "Blake Dare", email: "corwin.josiah@reichert.com", idade: 7 },
    { name: "Mellie Carter", email: "pedro.lang@wuckert.com", idade: 9 },
    { name: "Alycia Mraz", email: "mcclure.delfina@schoen.info", idade: 3 },
    { name: "Winston Okuneva Jr.", email: "wolf.carolina@fahey.com", idade: 1 },
    { name: "Della Veum", email: "rmertz@gleason.org", idade: 2 },
    {
      name: "Prof. Jade Schuppe DDS",
      email: "talon.conroy@yahoo.com",
      idade: 7,
    },
    {
      name: "Bridgette Wiegand",
      email: "howard.ritchie@hotmail.com",
      idade: 9,
    },
    {
      name: "Cristopher Baumbach",
      email: "gerhold.candida@gmail.com",
      idade: 3,
    },
    { name: "Mr. Zachery Swift III", email: "madyson59@hotmail.com", idade: 9 },
    { name: "Prof. Franco Leffler", email: "ghaag@cummings.net", idade: 0 },
    { name: "Winifred Konopelski", email: "minerva.zieme@zieme.com", idade: 1 },
    { name: "Margarett Moen Jr.", email: "edd81@hotmail.com", idade: 1 },
    { name: "Miss Andreanne Franecki", email: "jwolf@cole.com", idade: 3 },
    { name: "Macie Hermiston", email: "derek72@batz.com", idade: 0 },
    { name: "Olen Koelpin", email: "towne.hailee@yahoo.com", idade: 9 },
    { name: "Keira Denesik V", email: "danial50@yahoo.com", idade: 4 },
    { name: "Weston Will", email: "june84@yahoo.com", idade: 1 },
    { name: "Cielo Sawayn IV", email: "lavada.wiegand@lebsack.com", idade: 6 },
    { name: "Prof. Rogers Ledner", email: "adickinson@koepp.com", idade: 7 },
    {
      name: "Mr. Jarrod Smitham I",
      email: "price.imelda@hotmail.com",
      idade: 8,
    },
    { name: "Dr. Pablo Koch II", email: "stone.dubuque@gmail.com", idade: 6 },
    { name: "Mr. Dave Hane", email: "swift.arthur@kessler.com", idade: 3 },
    { name: "Chauncey Feil", email: "fpadberg@lynch.org", idade: 0 },
    {
      name: "Ms. Shaniya Koch DDS",
      email: "kamryn.macejkovic@emard.com",
      idade: 2,
    },
    { name: "Laury Bartoletti", email: "carroll.aurelie@yahoo.com", idade: 7 },
    { name: "Paris Cole", email: "rice.gino@corwin.com", idade: 6 },
    { name: "Henriette Orn", email: "slabadie@padberg.net", idade: 2 },
    {
      name: "Jewell Franecki",
      email: "santiago.weimann@hotmail.com",
      idade: 3,
    },
    { name: "Leonard Cartwright PhD", email: "moises72@hotmail.com", idade: 5 },
    { name: "Prof. Mohamed Rogahn", email: "jkunde@gmail.com", idade: 6 },
    { name: "Johan Gutmann", email: "alvena12@hotmail.com", idade: 2 },
    { name: "Dr. Miller Dare", email: "thiel.anya@yahoo.com", idade: 5 },
    { name: "Eileen Schumm", email: "lhilpert@fay.com", idade: 7 },
    { name: "Destinee Krajcik", email: "eusebio33@bergstrom.info", idade: 6 },
    { name: "Eli Mraz", email: "hadley40@leffler.org", idade: 9 },
    { name: "August Stark DVM", email: "elvis.adams@gmail.com", idade: 4 },
    { name: "Antonio Gutkowski", email: "rahul85@yahoo.com", idade: 1 },
  ];

  const listaHtml = listaPessoas.map((p) => {
    return (
      <tr key={"key" + p.email}>
        <td>{p.name}</td>
        <td>{p.email}</td>
        <td>{p.idade}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <th>Nome</th>
        <th>Email</th>
        <th>Idade</th>
      </thead>
      <tbody>{listaHtml}</tbody>
    </table>
  );
}
export default Users;
