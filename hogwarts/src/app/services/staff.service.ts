import { Injectable } from '@angular/core';

import { IStaff } from '../interfaces/staff';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor() {}

  getStaff(): IStaff[] {
    return [
      {
        image: './../../../assets/images/minerva-mcGonagall.png',
        name: 'Minerva McGonagall',
        job1: 'Head of the Transfiguration department.',
        job2: 'Head of Gryffindor.',
        description:
          'True to Gryffindor, Minerva valued bravery and courage highly, believing cowardice be a heavy flaw. She fought the Death Eaters and protected her students, proving her bravery. Despite her loyalty to her house, Minerva was a fair-minded person who was known for docking points from students in her own House when she saw it must be done.',
      },
      {
        image: './../../../assets/images/pomona-sprout.png',
        name: 'Pomona Sprout',
        job1: 'Head of the Herbology department.',
        job2: 'Head of Hufflepuff House.',
        description:
          'Professor Sprout was noted to be very cheerful, positive, and loyal,but was also very professional and just and would chide her students if necessary. Thus, Sprout possessed all of the virtues and aspects belonging to Hufflepuff House. She was kind and nurturing to the students.',
      },
      {
        image: './../../../assets/images/filius-flitwick.png',
        name: 'Filius Flitwick',
        job1: 'Charms Master.',
        job2: 'Head of Ravenclaw House.',
        description:
          'Flitwick was an emotional fellow, who seemed to have a gentle spirit.He was also shown to have a sense of mischief and fun.Flitwick was considerably more tolerant of disobedience than most of his fellow professors, known for rarely handing out detentions and deducting House Points.',
      },
      {
        image: './../../../assets/images/severus-snape.png',
        name: 'Severus Snape',
        job1: 'The Potions Master.',
        job2: 'Head of Slytherin House.',
        description:
          'At times, Snape could appear cold, cynical, malicious, bitter, and sarcastic. He had a commanding presence that exuded gravitas, authority and control; like Professor McGonagall, he had the ability to keep a class quiet without effort. He tended to hold grudges and was extremely spiteful toward those whom he disliked.',
      },
      {
        image: './../../../assets/images/argus-filch.png',
        name: 'Argus Filch',
        job1: 'Caretaker of Hogwarts.',
        job2: '',
        description:
          'Very foul-tempered, cantankerous, and easily annoyed, Filch had an extremely unpleasant personality. Despite working at a school, Filch deeply resented the students and was greatly disliked by them in return and some members of the staff, as well.',
      },
      {
        image: './../../../assets/images/poppy-pomfrey.png',
        name: 'Poppy Pomfrey',
        job1: 'Matron at Hogwarts School.',
        job2: '',
        description:
          'Madam Pomfrey was described by her students as being exceptionally kind, but even more so strict.She was very obsessive, lining up her patients sweet boxes in neat rows, and was intensely worried about all of the students under her care, believing even feasts to be risky.',
      },
      {
        image: './../../../assets/images/hagrid.png',
        name: 'Rubeus Hagrid',
        job1: 'Keeper of Keys and Grounds of Hogwarts.',
        job2: 'Professor of Care of Magical Creatures.',
        description:
          "Hagrid was an incredibly warm, kind-hearted man, and would often forget his exceptional size and strength when patting people on the back. Another of Hagrid's greatest traits was his courage. He was also very loyal to his friends and was ready to defend them or fight for them if necessary."
      },
      {
        image:'./../../../assets/images/rolanda-hooch.png',
        name:'Rolanda Hooch',
        job1:'Flying Instructor.',
        job2:'',
        description:'Madam Hooch was known and respected by her students because of her belief in good sportsmanship, fairness, and clean games of Quidditch.She sometimes seemed impatient whilst teaching her students flying, as while teaching a group of first years.Regardless she was still kind and caring.'
      },
      {
        image:'./../../../assets/images/irma-pince.png',
        name:'Irma Pince',
        job1:'Hogwarts Librarian.',
        job2:'',
        description:"Madam Pince was a short-tempered woman who was overly protective of the Library's books and, as such, quite unpopular among students. She was mainly seen by students as an obstacle to research, but she was professional nonetheless, helping students to check out books and by finding information for them",

       
      }
    ];
  }
}
