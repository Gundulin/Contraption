import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysticValeCompanionComponent } from './mystic-vale-companion.component';

describe('MysticValeCompanionComponent', () => {
  let component: MysticValeCompanionComponent;
  let fixture: ComponentFixture<MysticValeCompanionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysticValeCompanionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysticValeCompanionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
