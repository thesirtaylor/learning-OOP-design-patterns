class CloudProviderService {
  isLoggedIn(): boolean {
    return true;
  }

  login(): void {}

  convertFile(file: string): string {
    return file;
  }

  uploadFile(file: string): string {
    return file;
  }

  getFileLink(file: string): string {
    return `https://cloud-provider.com/${file}`;
  }
}

class CloudProviderServiceFacade {
  private service: CloudProviderService;
  constructor() {
    this.service = new CloudProviderService();
  }

  uploadFile(file: string): string {
    if (!this.service.isLoggedIn()) {
      this.service.login();
    }

    const convertedFile = this.service.convertFile(file);
    this.service.uploadFile(convertedFile);
    return this.service.getFileLink(convertedFile);
  }
}

//client
const facade = new CloudProviderServiceFacade();
const fileLink = facade.uploadFile("file");
console.log("File link: ",fileLink);