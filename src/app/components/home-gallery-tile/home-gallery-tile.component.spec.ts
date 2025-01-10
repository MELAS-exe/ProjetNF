import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGalleryTileComponent } from './home-gallery-tile.component';

describe('HomeGalleryTileComponent', () => {
  let component: HomeGalleryTileComponent;
  let fixture: ComponentFixture<HomeGalleryTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeGalleryTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGalleryTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
