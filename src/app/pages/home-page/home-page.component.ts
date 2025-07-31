import {
  afterNextRender,
  afterRender,
  Component,
  effect,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')} `,
    'color: #bada55'
  );
};

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
  styles: ``,
})
export class HomePageComponent {
  traditionalProperty = 'Damian'; // depene mucho del ciclo de vida y de la librería Zone.js para detectar cambios.
  signalProperty = signal('Damian');

  constructor() {
    //en español
    // Lógica de inicialización del componente
    log('constructor', ' Lógica de inicialización del componente');
    // Initialization logic can go here

    // setTimeout(() => {
    //   this.signalProperty.set('Juan Carlos');
    // }, 2000);
  }

  changeTraditional() {
    this.traditionalProperty = 'Fernando Herrera';
  }

  changeSignal() {
    this.signalProperty.set('Fernando Herrera');
  }

  bassicEffect = effect(() => {
    //en español
    // Efecto básico que se ejecuta cuando las dependencias cambian
    log(
      'bassicEffect',
      ' Efecto básico que se ejecuta cuando las dependencias cambian'
    );
    // Basic effect that runs when dependencies change
  });

  ngOnInit() {
    //en español
    // Lógica para ejecutar cuando el componente se inicializa
    log('ngOnInit', ' Lógica para ejecutar cuando el componente se inicializa');
    // Logic to run on component initialization
  }

  ngOnChanges() {
    //en español
    // Lógica para ejecutar cuando cambian las propiedades vinculadas
    log(
      'ngOnChanges',
      ' Lógica para ejecutar cuando cambian las propiedades vinculadas'
    );
    // Logic to run on input changes
  }

  ngDoCheck() {
    //en español
    // Lógica para ejecutar en cada ciclo de detección de cambios
    log(
      'ngDoCheck',
      ' Lógica para ejecutar en cada ciclo de detección de cambios'
    );
    // Logic to run on every change detection cycle
  }

  ngAfterContentInit() {
    //en español
    // Lógica para ejecutar después de que el contenido haya sido proyectado
    log(
      'ngAfterContentInit',
      ' Lógica para ejecutar después de que el contenido haya sido proyectado'
    );
    // Logic to run after content projection
  }

  ngAfterContentChecked() {
    //en español
    // Lógica para ejecutar después de que el contenido haya sido verificado
    log(
      'ngAfterContentChecked',
      ' Lógica para ejecutar después de que el contenido haya sido verificado'
    );
    // Logic to run after content has been checked
  }

  ngAfterViewInit() {
    //en español
    // Lógica para ejecutar después de que la vista haya sido inicializada
    log(
      'ngAfterViewInit',
      ' Lógica para ejecutar después de que la vista haya sido inicializada'
    );
    // Logic to run after the view has been initialized
  }

  ngAfterViewChecked() {
    //en español
    // Lógica para ejecutar después de que la vista haya sido verificada
    log(
      'ngAfterViewChecked',
      ' Lógica para ejecutar después de que la vista haya sido verificada'
    );
    // Logic to run after the view has been checked
  }

  ngOnDestroy() {
    //en español
    // Lógica para limpiar recursos antes de que el componente sea destruido
    log(
      'ngOnDestroy',
      ' Lógica para limpiar recursos antes de que el componente sea destruido'
    );
    // Cleanup logic before the component is destroyed
  }

  afterNextRenderEffect = afterNextRender(() => {
    //en español
    // Lógica que se ejecuta una vez que todos los componentes han sido renderizados al DOM.
    log(
      'afterNextRenderEffect',
      ' Lógica que se ejecuta una vez que todos los componentes han sido renderizados al DOM.'
    );
    // Runs once the next time that all components have been rendered to the DOM.
  });

  afterEveryRender = afterRender(() => {
    //en español
    // Lógica que se ejecuta cada vez que todos los componentes han sido renderizados al DOM.
    log(
      'afterEveryRender',
      ' Lógica que se ejecuta cada vez que todos los componentes han sido renderizados al DOM.'
    );
    // Runs every time all components have been rendered to the DOM.
  });
}
