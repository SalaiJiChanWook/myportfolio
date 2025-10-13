import MalwareCollection from '../assets/MalwareCollection.jpg';
import RestaurantManagementSystemIncludePOS from '../assets/RestaurantManagementSystemIncludePOS.jpg';
import DisneyClone from '../assets/Disney-Clone.png';
import MoodleDeployment from '../assets/MoodleDeploymentWithDockerOnRaspberryPi.png';
import BankingSystem from '../assets/Banking-System-With-AVL-Tree.jpg';
import ComputerVision from '../assets/ComputerVisionProject.png';

const projects = [
  {
    id: 'p1',
    title: 'Malware-collection-for-Defensive-Security-Awareness',
    description: 'This repository is a collection of various types of malware samples, including viruses, worms, trojans, ransomware, spyware, adware, rootkits, and more. The samples are organized into different categories based on their type and functionality.',
    tech: ['Python', 'bat', 'reverse engineering'],
    image: MalwareCollection,
    link: 'https://github.com/SalaiJiChanWook/Malware-collection-for-Defensive-Security-Awareness'
  },
  {
    id: 'p2',
    title: 'Malar Twist POS Project',
    description: 'A comprehensive restaurant management system with integrated Point of Sale (POS) functionality, designed to streamline operations and enhance customer service.',
    tech: ['C#', '.NET 9.0', 'SQL Server', 'entity framework'],
    image: RestaurantManagementSystemIncludePOS,
    link: 'https://github.com/SalaiJiChanWook/RestaurantManagementSystemIncludePOS'
  },
  {
    id: 'p3',
    title: 'Disney-Clone Website',
    description: 'A Disney+ clone website built with React and Bootstrap, featuring a responsive design and interactive UI components.',
    tech: ['React', 'Bootstrap', 'Vite'],
    image: DisneyClone,
    link: 'https://github.com/SalaiJiChanWook/Disney-Clone'
  },
  {
    id: 'p4',
    title: 'Moodle Deployment With Docker On RaspberryPi',
    description: 'A step-by-step guide to deploy Moodle using Docker on a Raspberry Pi, including setting up necessary services like MariaDB and phpMyAdmin.',
    tech: ['PHP', 'Linux', 'MYSQL', 'Docker', 'Raspberry Pi'],
    image: MoodleDeployment,
    link: 'https://github.com/SalaiJiChanWook/Moodle_Deployment_With_Docker_On_RaspberryPi'
  },
  {
    id: 'p5',
    title: 'Banking-System-With-AVL-Tree',
    description: 'A simple banking system implemented in C programming using AVL tree data structure for efficient data management and retrieval.',
    tech: ['C programming', 'Data Structure', 'Algorithm'],
    image: BankingSystem,
    link: 'https://github.com/SalaiJiChanWook/Banking-System-With-AVL-Tree'
  },
  {
    id: 'p6',
    title: 'Computer_Vision_Project',
    description: 'A computer vision project that involves image processing and analysis using various algorithms and techniques.',
    tech: ['Python', 'Linux', 'MTCNN', 'SVM', 'Raspberry Pi'],
    image: ComputerVision,
    link: 'https://github.com/SalaiJiChanWook/Computer_Vision_Final_Project'
  }
];

export default projects;
