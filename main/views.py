import logging
from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from django.contrib import messages
from django.urls import reverse
from .models import Project, ContactMessage
from .forms import ContactForm

logger = logging.getLogger(__name__)

def home(request):
    active_section = 'home'
    if request.path == '/about/':
        active_section = 'about'
    elif request.path == '/projects/':
        active_section = 'projects'
    elif request.path == '/contact/':
        active_section = 'contact'

    projects = Project.objects.all()
    form = ContactForm()
    
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Save to database
            ContactMessage.objects.create(
                name=form.cleaned_data['name'],
                email=form.cleaned_data['email'],
                subject=form.cleaned_data['subject'],
                message=form.cleaned_data['message']
            )
            
            # Send email with label/folder identifier
            try:
                send_mail(
                    subject=f"[Portfolio] {form.cleaned_data['subject']}",  # Added label identifier
                    message=f"Name: {form.cleaned_data['name']}\nEmail: {form.cleaned_data['email']}\n\nMessage:\n{form.cleaned_data['message']}",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.RECIPIENT_EMAIL],
                    fail_silently=False,
                )
                messages.success(request, "Your message was sent successfully!")
            except Exception as e:
                messages.error(request, f"Failed to send message: {str(e)}")
            
            # Redirect to contact section with anchor
            return redirect(f"{reverse('contact')}#contact")
            
    return render(request, 'home.html', {
        'projects': projects,
        'form': form,
        'active_section': active_section,
    })

# Doc views with static video context
def snake_docs(request):
    return render(request, 'projects/snake_docs.html')

def space_docs(request):
    return render(request, 'projects/space_docs.html')

def flappy_docs(request):
    return render(request, 'projects/flappy_docs.html')