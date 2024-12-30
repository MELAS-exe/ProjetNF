import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NettoyerComponent } from './nettoyer.component';

describe('NettoyerComponent', () => {
  let component: NettoyerComponent;
  let fixture: ComponentFixture<NettoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NettoyerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NettoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
