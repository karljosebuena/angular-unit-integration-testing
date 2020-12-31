import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        VoterComponent
      ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement =  de.nativeElement;

    expect(el.innerText).toContain('21');
  });

  it('should highlight the upVote button if upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    const el: HTMLElement =  de.nativeElement;

    expect(el.classList).toContain('highlighted');
  });

  it('should highlight the downVote button if downvoted', () => {
    component.myVote = -1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.glyphicon-menu-down'));

    expect(de.classes['highlighted']).toBeTruthy();
  });
});
