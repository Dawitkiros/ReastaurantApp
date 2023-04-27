import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the menuImage onImageUpload', () => {
    const file = new File(['dummy'], 'dummy.png', { type: 'image/png' });
    const event = { target: { files: [file] } };
    const mockReader = new FileReader();
    spyOn(window as any, 'FileReader').and.returnValue(mockReader);
    spyOn(mockReader, 'readAsDataURL');
    spyOnProperty(mockReader, 'result').and.returnValue('base64,dummy');
    component.onImageUpload(event);
    expect(component.menuForm.menuImage).toBe('dummy');
  });

});
