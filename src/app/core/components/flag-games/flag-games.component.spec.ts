import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagGamesComponent } from './flag-games.component';

describe('FlagGamesComponent', () => {
  let component: FlagGamesComponent;
  let fixture: ComponentFixture<FlagGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
